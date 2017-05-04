// Requires and global variables
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// Routes
router.get('/login', function(req, res) {
    res.render('loginForm');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    successFlash: 'Good job, you logged in.  Woo!',
    failureRedirect: '/auth/login',
    failureFlash: 'Try again, loser.'
}));

router.get('/signup', function(req, res) {
    res.render('signupForm');
});

router.post('/signup', function(req, res, next) {
    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'password': req.body.password
        }
    }).spread(function(user, wasCreated) {
        console.log('wasCreated:', wasCreated)
        if (wasCreated) {
            console.log('GOOD!')
                // Good!
            passport.authenticate('local', {
                successRedirect: '/profile',
                successFlash: 'Account created and logged in!',
                failureRedirect: '/login',
                failureFlash: 'Unknown error occurred, please re-login.'
            })(req, res, next);
        } else {
            console.log('BAD!')
                // Bad!
            req.flash('error', 'Email already exists!  Please login');
            res.redirect('/auth/login/');
        }
    }).catch(function(error) {
        req.flash('error', error.message);
        res.redirect('/auth/signup');
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success', 'you logged,out, se ya next time!');
    res.redirect('/');

});

// Export
module.exports = router;
