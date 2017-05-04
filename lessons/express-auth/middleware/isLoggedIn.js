module.exports = function(req, res, next) {
    if (!req.user) {
        req.flash('error', 'you must be logged in to use this page');
        res.redirect('/auth/login'); // whoa!  not so fast!
    } else {
        next(); // Good to go! Proceed as planned
    }
};
