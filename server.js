var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./api/config/mongodb');
var app = express();
var passport = require('passport');
var port = process.env.port || 8080;
mongoose.connect(config.url);

var routesApi = require('./api/routes/index');
var contracts = require('./api/routes/contract');

app.set('views', path.join(__dirname, 'dist/crypto-project'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'dist/crypto-project')));

require('./api/config/passport');

app.use('/api', routesApi);

app.use('/contracts',contracts);


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'dist/crypto-project/index.html'));
});
app.listen(port, function(){
    console.log('App is listening to port : '+port);
});