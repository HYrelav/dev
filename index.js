var express = require('express');
var app = express();
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
app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
});
app.listen(3000);
