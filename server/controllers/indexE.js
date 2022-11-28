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

module.exports.displayHomePage = (req, res, next) => res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });

module.exports.displayLoginPage = (req,res,next) => {
    //check if user is already logged in
    if(!req.user)
    {
        res.render('auth/login',
        {
            title:"Login",
            messages: req.flash('loginMessage'),
            dispalyName: req.user ? req.user.dispalyName: ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local',
    (err,user,info) => {
        //server err?
        if(err)
        {
            return next(err);
        }
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

module.exports.displayRegisterPage = (req,res,next) => {
    //check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName: ''
        });
    }
    else
    {
        return res.redirect('/');
    }
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
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Register Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName: ''
            });
        }
        else
        {
            //if no error exists, then registration is successful

            //redirect the user and authenticate them

            return passport.authenticate('local')(req,res,() => {
                res.redirect('/survey')
            });
        }
    });
}

module.exports.displayUpdateUserPage = (req,res,next) => {
    //check if the user is already logged in
    if(req.user)
    {
        res.render('auth/update',
        {
            title: 'Update',
            messages: req.flash('updateMessage'),
            displayName: req.user.displayName,
            id: req.user._id,
            username: req.user.username,
            email: req.user.email
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processUpdateUserPage = (req,res,next) => {
    let updateUser = new User({
        _id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName,
    });

    console.log("id: " + updateUser._id);

    User.findByIdAndUpdate(updateUser._id, {displayName: "John"}, (err, result) => {
        if(err)
        {
            console.log("Error: Update Existing User");
            res.json({ success: false, msg: err });
        }
        else
        {
            //if no error exists, then registration is successful
            res.json({ success: true, msg: "User updated successfully!", result });
        }
    });
}

module.exports.performLogout = (req,res,next)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}