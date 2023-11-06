const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name."]
  },
  email: {
    type: String,
    required: [true, "Please add a email."],
    unique: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email."
    ]
  },
  password: {
    type: String,
    required: [true, "Please add a password."],
    minLength: [7, "Password must be up to 7 characters"],
    maxLength: [20, "Password must not be more than 20 characters"],
    match: [
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{7,}$/
    ]
  },
  photo: {
    type: String,
    default: "https://i.ibb.co/4pDNDk1/avatar.png"
  },
  phone: {
    type: String,
    default: "+55"
  },
  bio: {
    type: String,
    default: "",
    maxLength: [75, "Password must not be more than 75 characters"]
  },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;