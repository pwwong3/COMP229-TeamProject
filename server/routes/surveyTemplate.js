/*******************************
 * File name: surveyTemplate.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

var express = require('express');
var router = express.Router();
let surveyTemplateController = require('../controllers/surveyTemplate');

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', surveyTemplateController.displayHomePage);

module.exports = router;
