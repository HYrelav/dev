namespace expressMiddleware001 {
    
let express = require('express');
let app = express();
let path = require('path');


var requestTime = function (req: any, res: any, next: any) {
    req.requestTime = Date.now();
    next();
  }

var requestURL = function(req: any, res: any, next: any) {
    req.getURL = req.protocol + "://" + req.get('host') + req.url;
    next();
};

var myLogger = function (req: any, res: any, poildecarotte: any) {
    console.log('LOGGED: ' + req.requestTime + ' ' + req.url + ' ' + req.getURL );
    poildecarotte();
}

app.use(requestTime);
app.use(requestURL);
app.use(myLogger);

app.use('/', express.static(path.join(__dirname + '/../..', 'public')))
app.use('/web', express.static(path.join(__dirname + '/../..', 'public')))
app.use('/ping', function (req: any, res: any) {
    res.send("ok");
});

/*
app.use('*', function (req: any, res: any) {
    res.status(404);
    res.send("The page you requested is not found, error 404.")
});
*/

app.use(function(err: any , req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.use(function(err: any , req: any, res: any, next: any) {
    console.error(err.stack);
    res.status(404).send('Page not found!');
  });


app.get('/err500', function(req: any, res: any){
    res.status(500).send('Dead... Internal Server ERROR').end();
});





app.listen(8102);


}