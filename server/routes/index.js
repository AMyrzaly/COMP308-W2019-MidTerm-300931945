/*
Midterm test
File name: index.js
Author: Abubakir Myrzaly
StudentID: 300931945
*/


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;


/*GET - display the Login Page*/
router.get('/login', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

/*POST - processes the Login Page*/
router.post('/login', (req, res, next) => {
  res.render('content/index', {});
});

/*GET - displays the User Registration Page*/

/*POST - processes the User Registration Page*/

/*GET - perform user logout*/