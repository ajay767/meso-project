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
  fee: {
    type: Number,
    required: [true, 'please specify your regular appointment fee!']
  },
  discount: {
    type: Number,
    vailidate: {
      validator: function(val) {
        return val < this.fee;
      }
    }
  },
  gender: {
    type: String,
    required: [true, 'A user must specify there name']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    select: false
  }
});
// employeeSchema.pre('save', function(next) {
//   if (this.gender === 'male') this.name = `Mr.${this.name}`;
//   else if (this.gender === 'female') {
//     this.name = `Mrs.${this.name}`;
//   }
//   next();
// });

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
