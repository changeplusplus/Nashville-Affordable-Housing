var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var resultsRouter = require('./routes/results.js');
var map = require('./public/javascripts/map.js')

const targetBaseUrl = "http://localhost:3000/";

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/results', resultsRouter);

app.post('/results', function(req, res){
	console.log("You sent %s and %s in the form", req.body.maximum, req.body.minimum);

	map.SendParam(req.body.maximum, req.body.minimum);
	
	res.sendFile(__dirname + "/public/map.html");
})



module.exports = app;
