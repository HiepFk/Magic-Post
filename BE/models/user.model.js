const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  email: String,
  phone: Number,
  nameTrans: String,
  nameGather: String,
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

UserSchema.pre(/^find/, function (next) {
  this.populate({
    path: "role",
    
  });
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
