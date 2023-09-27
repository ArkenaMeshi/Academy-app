const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.post("/user", UserController.createUser);
  app.get("/user", UserController.getAllUsers);
  app.get("/user/:id", UserController.getUser);
  app.patch("/user/edit/:id", UserController.updateUser);
  app.delete("/user/:id", UserController.deleteUser);

 
};