const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

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
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

doctorSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

doctorSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

doctorSchema.pre(/^find/, function(next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

doctorSchema.methods.correctPassword = async function(
  candidatePassword,
  doctorPassword
) {
  return await bcrypt.compare(candidatePassword, doctorPassword);
};

doctorSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

doctorSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
