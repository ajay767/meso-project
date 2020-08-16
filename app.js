const express = require('express');
const morgan = require('morgan');

const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/employee', employeeRoute);

module.exports = app;
