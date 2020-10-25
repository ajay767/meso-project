const express = require('express');
const morgan = require('morgan');
const pug = require('pug');

const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');
const AppError = require('./utlis/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get('/', (req, res) => {
  res.render('home.pug');
});

app.get('/login', (req, res) => {
  res.render('login.pug');
});

app.get('/signup', (req, res) => {
  res.render('signup.pug');
});

app.get('/me', (req, res) => {
  res.render('me-user.pug', {
    userID: `2824734739id44m`,
    pageName: 'My profile'
  });
});

app.get('/notification', (req, res) => {
  res.render('notification.pug', {
    userID: `AIR health card | Notification`,
    pageName: 'Notification'
  });
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/employee', employeeRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
