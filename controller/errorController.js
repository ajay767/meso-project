/* eslint-disable no-console */
const AppError = require('./../utlis/appError');

const handleCastErrorDB = err => {
  const message = `invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};
const handleDublicateFieldsDB = err => {
  const value = err.keyValue.email;
  console.log(err);
  const message = `Duplicate field value: ${value}, please use another value!`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
    name: err.name
  });
};

const sendErrorProd = (err, res) => {
  //operational error, trusted error : send message to client

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    //programming or any other error// don't disclose the error to the client
  } else {
    //1) log error
    console.log(err, err.name);

    //send generic error
    res.status(500).json({
      status: 'Error!',
      message: 'Something went very wrong!'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'Fail';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV.trim() === 'production') {
    if (err.name === 'CastError') err = handleCastErrorDB(err);
    if (err.code === 11000) err = handleDublicateFieldsDB(err);

    sendErrorProd(err, res);
  }
};
