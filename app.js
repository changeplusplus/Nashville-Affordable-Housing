var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Zillow = require("node-zillow");
var pug = require('pug');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resultsRouter = require('./routes/results');
var mapRouter = require('./routes/map');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/results', resultsRouter);
app.use('/map', mapRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log("Made it to the catch 404 handler");
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
app.post('/map', function(req, res){
	console.log("You sent %s and %s in the form", req.body.Max, req.body.Min);

	

	ZillowFile.SendParam(req.body.Max, req.body.Min);

	var parameters = {
		state: "TN",
		county: "Davidson",
		childtype: "neighborhood"
	};

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			ZillowFile.SendParam(req.body.Max, req.body.Min);
			console.log("Whole response");
			console.log(results);
			console.log(ZillowFile.ZillowData(results));
			//res.render('map', {title: ZillowFile.ZillowData(results)});
		})
	/*
	map.QuandlData(quandl.dataset("ZILLOW", "ZIP_RMP_37011", function(err, resp){
		if (err){
			throw err;
		}

		console.log(resp);
		return resp;
	}))
})
*/

module.exports = app;

