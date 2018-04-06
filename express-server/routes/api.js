// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var Mattia = require('../models/mattia.js')
var Test = require('../models/test.js')



// Connect to mongodb
mongoose.connect('mongodb://localhost/cv');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK"); 
}); 
 


router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works - yes');
});

/* GET all users. */
router.get('/Mattia', (req, res) => {
    Mattia.find({}, (err, mattia) => {
        if (err) res.status(500).send(error)

        res.status(200).json(mattia);
    });
}); 

router.get('/test', (req, res) => {
    Test.find({}, (err, test) => {
        if (err) res.status(500).send(error)
        res.status(200).json(test);
    });
}); 

/* GET one users. */
router.get('/Mattia/:id', (req, res) => {
    Mattia.findById(req.param.id, (err, mattia) => {
        if (err) res.status(500).send(error)
        res.status(200).json(mattia);
    });
});

router.post('/auth', (req, res) =>{
    res.status(201).json({
            message: 'auth'
        });
});


router.get('/create', (req, res) => {
    let test = new Test({
        name: "test"
    });

    test.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Test created successfully'
        });
    });
});

/* Create a user. */
router.post('/Mattia', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;