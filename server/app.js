const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

//Process.env setting
require('dotenv').config();
require('./models').init();

const router = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  next();
});
app.use(cors());


app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.message) {
    if (err.message.includes('undefined')) err.status = 400;
  }
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
