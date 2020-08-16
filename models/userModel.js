const mongoose = require('mongoose');

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
  }
});

userSchema.pre('save', function(next) {
  this.name = this.gender === 'male' ? `Mr.${this.name}` : `Mrs.${this.name}`;
  next();
});

const user = mongoose.model('user', userSchema);

module.exports = user;
