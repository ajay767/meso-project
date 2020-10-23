const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must specify there Name!']
  },
  age: {
    type: Number,
    required: [true, 'A user must specify there age!']
  },
  gender: {
    type: String,
    required: [true, 'A user must apecify there gender']
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

userSchema.pre('save', function(next) {
  if (this.gender === 'male') this.name = `Mr.${this.name}`;
  else if (this.gender === 'female') {
    this.name = `Mrs.${this.name}`;
  }
  next();
});

userSchema.pre('save', async function(next) {
  try {
    this.password = await bcrypt.hash(this.password, 8);
  } catch (error) {
    throw new Error('Error occured');
  }
  next();
});

const user = mongoose.model('User', userSchema);

module.exports = user;
