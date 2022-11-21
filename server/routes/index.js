/*******************************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

// TODO: Remove with ejs
/* GET home page. */
router.get('/', indexController.displayHomePage);

module.exports = router;
