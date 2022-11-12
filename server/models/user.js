/*******************************
 * File name: user.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/

// require modules for the User model
let mongoose = require('mongoose');
//TODO: install passport-local-mongooseort
//let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'Email Address is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
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
    collection: "users"
});

// configure options for User Model
 //let options = ({ missingPasswordError: 'Wrong / Missing Password'});

 //User.plugin(passportLocalMongoose, options);

 module.exports.User = mongoose.model('User', User);