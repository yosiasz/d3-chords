'use strict';

var express = require('express');
var app = express();

//var chordRouter = require('./src/routes/chordRoutes');

var port = process.env.PORT || 5000;


//used by express first
app.use(express.static('./public'));
app.use(express.static('./src'));
app.use(express.static('./sampledata'));



//templating engine
app.set('views', './src/views');      
app.set('view engine', 'ejs');


//app.use('/chords', chordRouter.getChords());

app.get('/chords', function (req, res) {
    res.render('chords', {
        title: 'Chord Chart'
    });
});

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Chord Chart'
    });
});

app.listen(port, function () {
    console.log('running server on port ' + port) 
});
