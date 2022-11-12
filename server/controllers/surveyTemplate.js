/*******************************
 * File name: businessContact.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.10.11
*******************************/

// create the Survey Template Model instance
const surveyTemplateModel = require('../models/surveyTemplate');
const surveyTemplate = surveyTemplateModel.SurveyTemplate; // alias

module.exports.displayHomePage = (req, res, next) => {
    surveyTemplate.find().sort('name').exec((err, surveyTemplates) => {
        if (err) return console.error(err);
        res.render('survey/templates', { title: 'Survey Templates', SurveyTemplates: surveyTemplates });
    });
};