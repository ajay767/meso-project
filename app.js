const express = require('express');
const morgan = require('morgan');
const pug = require('pug');

const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const viewRouter = require('./routes/viewRoute');

const app = express();

app.use(express.json());

//serving static file path
app.use(express.static(`${__dirname}./../public`));
app.use('*/css', express.static('public/css'));
app.use('*/src', express.static('public/src'));
app.set('view engine', 'pug');
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/', viewRouter);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/employee', employeeRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
