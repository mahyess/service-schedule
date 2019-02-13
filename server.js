const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// for mail schedule
var mailer = require('./routes/mailer');

// routes
const mobiles = require('./routes/api/mobiles');
// const repair = require('./routes/api/repair');
// const posts = require('./routes/api/posts');

const app = express();

// for mail function
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mailer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
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

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
	.connect(db)
	.then(() => console.log('mongoDB Connected'))
	.catch(err => console.log(err));

// passport middleware
// app.use(passport.initialize());

// passport config
// require('./config/passport')(passport);

// use Routes
app.use('/api/mobiles', mobiles);
// app.use('/api/repair', repair);
// app.use('/api/posts', posts);



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

