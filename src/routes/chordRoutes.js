'use strict';

var cors = require('cors'),
    express = require('express'),
    app = express(),
    chordRouter = express.Router(),
    configmongo = require('../config/configmongo.js'),
    MongoClient = require('mongodb').MongoClient;

console.log(configmongo.url);

var getChords = function ( ) {
    
    chordRouter.all('*', cors());
    
    chordRouter.route('/')
        .get(function (req, res) {
        //mongodb://username:password@localhost:27017/exampledatabase
            MongoClient.connect(configmongo.url, function (err, db) {
                if (err) {
                    console.log(err);
                } else {
                    
                    var collection = db.collection('chords');

                    collection.find({}, {fields: {_id: 0}}).toArray(function (err, results) {

                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.send({
                            result: 'error',
                            err:    err.code
                        });
                    }
                        res.send(results[0]);
                    });
                };

            });

        });
    

    return chordRouter;
        
};

module.exports = {
  getChords: getChords
};
                         
                         