const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must specify there name']
  },
  degree: {
    type: String,
    required: [true, 'Please specify your educational Degree ']
  },
  registation_number: {
    type: Number,
    required: [true, 'please specify your Restriction number']
  },
  registationCouncil: {
    type: String,
    required: [true, 'please specify your Resgistration council']
  },
  registrationYear: {
    type: Date,
    required: [true, 'please specify your registration date']
  },
  doctorIndentifyProof: {
    type: String,
    required: [true, 'please specify your indentify proof']
  },
  registrationProof: {
    type: String,
    required: [true, 'please specify your registartion proof']
  },
  registationOwernshipProof: {
    type: String,
    required: [true, 'please specify your registartion proof']
  },
  academiaSpecification: {
    type: String,
    required: [true, 'please specify your academia Specification']
  },
  specialist: {
    type: String,
    required: [true, 'please specify your speciality']
  },
  department: {
    type: String,
    required: [true, 'please specify your department']
  },
  location: {
    type: String,
    required: [true, 'please specify your location']
  },
  fees: {
    type: Number,
    required: [true, 'please specify your regular appointment fee!']
  },
  day: {
    type: String
  },
  time: {
    type: String
  }
  // discount: {
  //   type: Number,
  //   vailidate: {
  //     validator: function(val) {
  //       return val < this.fee;
  //     }
  //   }
  // },
  // gender: {
  //   type: String,
  //   required: [true, 'A user must specify there name']
  // },
  // email: {
  //   type: String,
  //   required: [true, 'Please enter your email'],
  //   unique: true
  // },
  // password: {
  //   type: String,
  //   required: [true, 'Please enter your password'],
  //   select: false
  // }
});
// doctorSchema.pre('save', function(next) {
//   if (this.gender === 'male') this.name = `Mr.${this.name}`;
//   else if (this.gender === 'female') {
//     this.name = `Mrs.${this.name}`;
//   }
//   next();
// });

doctorSchema.pre('save', async function(next) {
  try {
    this.password = await bcrypt.hash(this.password, 8);
  } catch (error) {
    throw new Error('Error occured');
  }
  next();
});

const doctor = mongoose.model('doctor', doctorSchema);

module.exports = doctor;
