/*
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
*/

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.

// app.use(express.bodyParser());


app.post('/LoginService', bodyParser.urlencoded(), function(req, res) {
    var user = req.body.formusername;
    var pass = req.body.formpassword;
    console.log("post received: %s %s", user, pass);
});

function replace(newUrl){
    window.location.href = newUrl;
}