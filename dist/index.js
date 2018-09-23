"use strict";
var express = require('express');
var app = express();
var path = require('path');
var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
var requestURL = function (req, res, next) {
    req.getURL = req.protocol + "://" + req.get('host') + req.url;
    next();
};
var myLogger = function (req, res, poildecarotte) {
    console.log('LOGGED: ' + req.requestTime + ' ' + req.url + ' ' + req.getURL);
    poildecarotte();
};
app.use(requestTime);
app.use(requestURL);
app.use(myLogger);
app.use('/', express.static(path.join(__dirname + '/..', 'public')));
app.use('/web', express.static(path.join(__dirname + '/..', 'public')));
app.use('/ping', function (req, res) {
    res.send("ok");
});
app.use('*', function (req, res) {
    res.status(404);
    res.send("The page you requested is not found, error 404.");
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
});
app.get('/err505', function (req, res) {
    res.status(500).send('Dead... Internal Server ERROR').end();
});
app.get('*', function (req, res) {
    res.status(404).send('what???').end();
});
app.listen(8102);
