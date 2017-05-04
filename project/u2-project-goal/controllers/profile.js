var express = require('express');
var db = require('./../models');
var router = express.Router();
var moment = require('moment');
// var bodyParser = require('body-parser');




// //Date to end of quarter
// moment("20170601", "YYYYMMDD").fromNow();


//GET /profile/index - all aims
router.get('/', function(req, res) {
    db.aim.findAll({
        where: { userId: req.user.id }
    }).then(function(aims) {
        res.render('profile', { aims: aims });
    }).catch(function(err) {
        res.status(500).render('error');
    });
});
//GET /profile/new - display form to create new aim
router.get('/new', function(req, res) {
    res.render('new');
});
//GET /profile/:id - display a specific aim
router.get('/:id/edit', function(req, res) {
    db.aim.find({
        where: { id: req.params.id },
        include: [db.fire]
    }).then(function(aims) {
        console.log(aims);
        if (aims) {
            res.render('edit', { aims: aims });
        } else {
            res.status(404).render('error');
        }
    }).catch(function(err) {
        res.status(500).render('error');
    });
});
//GET
router.get('/:id', function(req, res) {
    db.aim.findById(req.params.id).then(function(aim) {
        if (aim) {
            res.render('show', { aim: aim });
        } else {
            res.status(404).render('error');
        }
    }).catch(function(err) {
        res.status(500).render('error');
    });
});

router.put('/:id', function(req, res) {
    console.log('------HERE: ', req.body);
    db.aim.findById(req.params.id).then(function(aim) {
        if (aim) {
            aim.updateAttributes({
                objective: req.body.aim
            }).then(function() {
                for (var key in req.body) {
                    if (key !== "aim") {
                        console.log('---------', req.body[key]);
                        db.fire.findById(key).then(function(fire) {
                            fire.updateAttributes({
                                keyResult: req.body[key]
                            })
                        })
                    }
                }
                res.send({ msg: 'success' });
            });
        } else {
            res.status(404).send({ msg: 'error' });
        }
    }).catch(function(err) {
        res.status(500).send({ msg: 'error' });
    });
});

router.delete('/:id', function(req, res) {
    db.aim.findById(req.params.id).then(function(aim) {
        if (aim) {
            aim.destroy().then(function() {
                res.send({ msg: 'success' });
            });
        } else {
            res.status(404).send({ msg: 'error' });
        }
    }).catch(function(err) {
        res.status(500).send({ msg: 'error' });
    });
});
//post /profile --create a new aim
router.post('/', function(req, res) {
    // console.log(req.body);
    db.aim.create(req.body).then(function(aim) {
        res.redirect('/profile');
    }).catch(function(err) {
        res.status(500).render('error');
    });
});

module.exports = router;
