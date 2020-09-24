const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must specify there name']
  },
  Academia_Specification: {
    type: String,
    required: [true, 'Please specify your educational Academia Specification  ']
  },
  Specialist: {
    type: String,
    required: [true, 'A user must specify there specialization']
  },
  Registration_Number: {
    type: String,
    required: [true, 'Please enter your registration number']
  },
  Registration_Council: {
    type: String,
    required: [true, 'Please enter your registration council']
  },
  Registration_Year: {
    type: String,
    required: [true, 'Please enter your registration year']
  },
  Doctor_Indentify_Proof: {
    type: String,
    required: [true, 'Please enter your Doctor Indentify proof']
  },
  Registration_Proof: {
    type: String,
    required: [true, 'Please enter your REGISTRATION PROOF ']
  },
  Establishment_Ownership_Proof: {
    type: String,
    required: [true, 'Please enter your ESTABLISHMENT OWNERSHIP PROOF ']
  },
  Location: {
    type: String,
    required: [true, 'Please enter your location']
  },
  Time_slot: {
    type: String,
    required: [true, 'Please enter your time-slot']
  },
  Fees: {
    type: Number,
    required: [true, 'Please enter your time-slot']
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
