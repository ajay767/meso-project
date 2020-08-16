const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must specify there name']
  },
  degree: {
    type: String,
    required: [true, 'Please specify your educational Degree ']
  },
  gender: {
    type: String,
    required: [true, 'A user must specify there name']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password']
  }
});

employeeSchema.pre('save', function(next) {
  if (this.gender === 'male') this.name = `Mr.${this.name}`;
  else if (this.gender === 'female') {
    this.name = `Mrs.${this.name}`;
  }
  next();
});

employeeSchema.pre('save', async function(next) {
  try {
    this.password = await bcrypt.hash(this.password, 8);
  } catch (error) {
    throw new Error('Error occured');
  }
  next();
});

const employee = mongoose.model('employee', employeeSchema);

module.exports = employee;
