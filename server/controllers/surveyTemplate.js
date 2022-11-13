/*******************************
 * File name: surveyTemplate.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

// create the Survey Template Model instance
const surveyTemplateModel = require('../models/surveyTemplate');
const SurveyTemplate = surveyTemplateModel.SurveyTemplate; // alias

module.exports.displayHomePage = (req, res, next) => {
    SurveyTemplate.find().sort('name').exec((err, surveyTemplates) => {
        if (err) return console.error(err);
        res.render('survey/templates', { title: 'Survey Templates', SurveyTemplates: surveyTemplates });
    });
};

module.exports.displayAddPage = (req, res, next) => res.render('survey/details', { title: 'Add Survey', survey: SurveyTemplate() });

module.exports.processAddPage = (req, res, next) => {
    const newSurvey = SurveyTemplate({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        surveyType: req.body.surveyType,
        questions: req.body.questions
    });
    
    SurveyTemplate.create(newSurvey, (err, survey) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the survey
            res.redirect('/survey');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    SurveyTemplate.findById(id, (err, surveyToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else{
            // show the edit view
            res.render('survey/details', { title: 'Edit Survey', survey: surveyToEdit });
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    const updatedSurvey = SurveyTemplate({
        _id: id,
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        surveyType: req.body.surveyType,
        questions: req.body.questions
    });

    SurveyTemplate.updateOne({_id: id}, updatedSurvey, err => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the surveys
            res.redirect('/survey');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    SurveyTemplate.remove({_id: id}, err => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the surveys
            res.redirect('/survey');
        }
    });
}