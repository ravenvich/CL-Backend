const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String || Number,
    required: false,
  },
  orders: [
    {
      title: String,
      price: String,
      quantity: Number,
      cleanType:String,
      finished:Boolean

    },]
});
module.exports = mongoose.model("UserSchema", UserSchema);
