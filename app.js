var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//API ROUTES 

app.use('/api/v1/header', require('./routes/header'));
app.use('/api/v1/blog', require('./routes/blog'));
app.use('/api/v1/cause', require('./routes/cause'));
app.use('/api/v1/donation', require('./routes/donation'));
app.use('/api/v1/contact', require('./routes/contact'));
app.use('/api/v1/footer', require('./routes/footer'));
app.use('/api/v1/newsletter', require('./routes/newsletter'));
app.use('/api/v1/moneystat', require('./routes/stat'));
app.use('/api/v1/mission', require('./routes/mission'));
app.use('/api/v1/rating', require('./routes/rating'));
app.use('/api/v1/testimonial', require('./routes/testimonial'));
app.use('/api/v1/slider', require('./routes/slider'));
app.use('/api/v1/help', require('./routes/wehelp'));
// CORS Setting

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authToken, userId");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
	next();
});
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;