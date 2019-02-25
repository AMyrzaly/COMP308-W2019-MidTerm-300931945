/*
Midterm test
File name: user.js
Author: Abubakir Myrzaly
StudentID: 300931945
*/

// required modules for our User model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      require: "username is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      require: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      require: "display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },

    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);

// configure options for the UserSchema
let options = {
  missingPassportError: "Wrong/Missing Password"
};

userSchema.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model("User", userSchema);
