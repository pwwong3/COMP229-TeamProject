/*******************************
 * File name: surveyTemplate.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

// create the Survey Template Model instance
const surveyTemplateModel = require('../models/surveyTemplate');
const SurveyTemplate = surveyTemplateModel.SurveyTemplate; // alias

const surveyResponseModel = require('../models/surveyResponse');
const SurveyResponse = surveyResponseModel.SurveyResponse; // alias

module.exports.displayHomePage = (req, res, next) => {
    SurveyTemplate.find().sort('name').exec((err, surveyTemplates) => {
        if (err) return console.error(err);
        res.json(surveyTemplates);
    });
};

module.exports.processAddPage = (req, res, next) => {
    console.log(req.body);
    const newSurvey = SurveyTemplate({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        surveyType: req.body.surveyType,
        questions: req.body.questions
    });
    
    SurveyTemplate.create(newSurvey, (err, survey) => {
        if(!err) res.json({ success: true, msg: 'Successfully Added New Survey' });
        console.log(err);
        res.end(err);
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
            res.json({ success: true, msg: 'Successfully Displayed Survey to Edit', survey: surveyToEdit });
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
        if(!err) res.json({ success: true, msg: 'Successfully Edited Survey', survey: updatedSurvey });
        console.log(err);
        res.end(err);
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    SurveyTemplate.remove({_id: id}, err => {
        if(!err) res.json({ success: true, msg: 'Successfully Delete Survey' })
        console.log(err);
        res.end(err);
    });
}

module.exports.processResponsePage = (req, res, next) => {
    const id = req.params.id;
    const newResponse = SurveyResponse({
        surveyId: id,
        responses: req.body.responses
    });
    
    SurveyResponse.create(newResponse, (err, response) => {
        if(!err) res.json({ success: true, msg: 'Successfully Response Survey', response: newResponse });
        console.log(err);
        res.end(err);
    });
};

module.exports.displayReportPage = (req, res, next) => {
    const id = req.params.id;
    SurveyResponse.find({ surveyId: id }, (err, responseUsers) => {
        if (!err) return res.json(responseUsers);
        console.error(err);
        res.end(err);
    });
};