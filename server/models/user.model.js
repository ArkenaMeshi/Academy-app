const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String , required:[true,"emri kerkohet"] },
    email: { type: String ,required:[true,"emaili kerkohet"]},
    password: { type: String,required:[true,"passwordi kerkohet"] },
    image: {type : String ,required:[true,"imazhi kerkohet"]},
    role: {
        type: String,
        enum: ['teacher', 'student' ],
        required : [true ,"Role is riquired"]
    },
  belt: {type:Boolean},
  degree: {type:Boolean}
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);