

// Retrieve
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var ObjectId = require('mongodb').ObjectID;
    var url = 'mongodb://localhost:27017/test';
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mosadb", function(err, db) {
    if (!err) {
        console.log("We are connected");
    }
    else {
        console.log("Error connecting to the database.");

    }

    module.exports = {
        var: loginAuth = function (db, callback) {
               // if (db != null) {
                    db.collection['users'].find({"user": user, "pass": pass});
                    console.dir(db);
                }// else {
                 //   callback();
                }
    // };
});


/*

// Retrieve
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/mosadb", function(err, db){
    if (!err) {
        console.log("We are connected")
    }
    else {
        console.log("Error connecting to the database.")

    }

    module.exports = {
        var: loginAuth = function (db, callback) {
            db.createCollection("users", function(err, collection){
                db.collection['users'].find({"user": user, "pass": pass});
                console.dir(db);
            });
        }
    });
};

*/
