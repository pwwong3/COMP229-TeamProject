/*******************************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexE');

// TODO: Remove with ejs
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET Route for dispalying the Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for dispalying the Register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page. */
router.post('/register', indexController.processRegisterPage);

/* GET to perform Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;