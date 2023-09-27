const User = require("../models/user.model");

// module.exports.createUser = (request, response) => {
//   User.create(request.body)
//     .then((user) => response.json(user))
//     .catch((err) => response.status(300).json(err));
// };
module.exports.createUser = (req, res) => {
  console.log(req.body.role)
  User.exists({role: "teacher"})
  .then(userExists => {
      if (userExists && req.body.role=="teacher") {
          // Promise.reject() will activate the .catch() below.
          return Promise.reject({errors:{role:{message:"mesuesi egziston"}}});
      }
      return User.create(req.body);
  })
  .then(saveResult => res.json(saveResult))
  .catch(err => res.status(300).json(err));
}

module.exports.getAllUsers = (request, response) => {
  User.find({})
    .then((user) => {
      console.log(user);
      response.json(user);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

module.exports.getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .then((user) => response.json(user))
    .catch((err) => response.json(err));
};

module.exports.updateUser = (request, response) => {
  User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedUser => response.json(updatedUser))
      .catch(err => response.json(err))
}


module.exports.deleteUser = (request, response) => {

  User.findOne({_id:request.params.id})
      .then(user =>
          user.role=="teacher" ?  User.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
          .then(deleteConfirmation => {
             return User.findOneAndUpdate({role: "student"}, {role:"teacher"}, {new:true})
          .then(updateUser => response.json(updateUser))
          .catch(err => response.json(err))
          })
          .catch(err => response.json(err)) :
          User.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err)

          
          ))
       .catch(err => response.json(err));
  
}