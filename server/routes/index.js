/*******************************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);

/* POST Route for processing the Register page. */
router.post('/register', indexController.processRegisterPage);

/* GET to perform Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;