const express = require('express');
const morgan = require('morgan');

const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users', userRoute);

module.exports = app;
