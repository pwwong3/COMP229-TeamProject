/*******************************
 * File name: surveyTemplate.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

var express = require('express');
var router = express.Router();
let surveyTemplateController = require('../controllers/surveyTemplateE');

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', requireAuth,surveyTemplateController.displayHomePage);

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
router.get('/respond/:id',surveyTemplateController.displayResponsePage);

/* POST Route for displaying the Response page - CREATE Operation */
router.post('/respond/:id', surveyTemplateController.processResponsePage);

/* GET Route for displaying the Report page - READ Operation */
router.get('/report/:id', surveyTemplateController.displayReportPage);

module.exports = router;
