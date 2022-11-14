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

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyTemplateController.displayAddPage);

/* POST Route for displaying the Add page - CREATE Operation */
router.post('/add', surveyTemplateController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', surveyTemplateController.displayEditPage);

/* POST Route for displaying the Edit page - UPDATE Operation */
router.post('/edit/:id', surveyTemplateController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', surveyTemplateController.performDelete);

/* GET Route for displaying the Response page - READ Operation */
router.get('/respond/:id', surveyTemplateController.displayResponsePage);

/* POST Route for displaying the Response page - CREATE Operation */
router.post('/respond/:id', surveyTemplateController.processResponsePage);

module.exports = router;
