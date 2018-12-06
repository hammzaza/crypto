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


app.set('views', path.join(__dirname, 'dist/crypto-project'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'dist/crypto-project')));
app.use('/api', routesApi);

require('./api/config/passport');
// require('./api/routes/addcontract')(app);
// require('./api/routes/authenticate')(app);
// require('./api/routes/get-contracts')(app);
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'dist/crypto-project/index.html'));
});
app.listen(port, function(){
    console.log('App is listening to port : '+port);
});