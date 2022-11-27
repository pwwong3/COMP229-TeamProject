/*******************************
 * File name: index.js
 * Name: Pak Wah WONG
 * StudentID: 301255741
 * Date: 2022.11.11
*******************************/
let mongoose = require('mongoose');
let passport = require('passport');

//create the User model instance
let userModel = require('../models/user');
let User = userModel.User;

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err,user,info) => {
        //server err?
        if(err) return next(err);
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage','Autherntication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/survey')
        });
    })(req,res,next);
}

module.exports.processRegisterPage = (req,res,next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name === "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Register Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            res.json({ success: false, msg: "Error: Inserting New User" });
        }
        else
        {
            //if no error exists, then registration is successful
            res.json({ success: true, msg: "User registered successfully!" });
        }
    });
}

module.exports.performLogout = (req,res,next)=>{
    req.logout(err => {
        if (err) return next(err);
    });
    res.json({ success: true, msg: "User log out successfully!"});
}