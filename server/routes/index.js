/*
Midterm test
File name: index.js
Author: Abubakir Myrzaly
StudentID: 300931945
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport=require('passport');
let userModel = require('../models/user');
let User = userModel.User; 

// define the game model
let book = require("../models/books");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    books: ""
  });
});

module.exports = router;

/*GET - display the Login Page*/
router.get("/login", (req, res, next) => {
  //check if user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Login",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } else {
    return res.redirect("/");
  }
});

/*POST - processes the Login Page*/
router.post("/login", (req, res, next) => {
  passport.authenticate('local',(err, user, info) => {
    if(err) {
      return next(err);
    }
    if(!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if(err) {
        return next(err);
      }
      return res.redirect('/contact-list');
    })
  })


  res.render('content/index',{

  });
});


/*GET - displays the User Registration Page*/
router.get("/register", (req, res, next) => {
  if (!req.user) {
    res.render("auth/register", {
      title: "Register",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : ""
    });
  } else {
    return res.redirect("/");
  }
});

/*POST - processes the User Registration Page*/

/*GET - perform user logout*/
router.get("/logout", (req, res, next) => {
  req.logOut();
  res.redirect('/');
})
