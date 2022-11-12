/*******************************
 * File name: surveyTemplate.js
 * Name: Pak Wah Wong
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

// require modules for the Survey Template model
let mongoose = require('mongoose');

let SurveyTemplate = mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
    },
    startDate: {
        type: Date,
        default: Date.now,
        required: 'Start date is required'
    },
    endDate: {
        type: Date,
        required: 'End date is required'
    },
    questions: [{
            questionNumber: {
                type: Number,
                required: 'Question Number is required'
            },
            questionText: {
                type: String,
                trim: true,
                required: 'Question Text is required'
            },
            questionType: {
                type: String,
                enum: ['MC', 'AD', 'SA'],
                required: 'Question Type is required'
            }
        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        default: '636ede98c28da25cc52e4291',
        required: 'User ID is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},
{
    collection: "surveyTemplates"
});

 module.exports.SurveyTemplate = mongoose.model('SurveyTemplate', SurveyTemplate);