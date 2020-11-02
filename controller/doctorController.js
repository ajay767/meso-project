const Doctor = require('./../models/doctorModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handleFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getDoctorMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateDoctorMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) Update user document
  const updateDoctor = await Doctor.findByIdAndUpdate(
    req.doctor.id,
    filteredBody,
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      dr: updateDoctor
    }
  });
});

exports.deleteDoctor = catchAsync(async (req, res, next) => {
  await Doctor.findByIdAndUpdate(req.doctor.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createDoctor = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.getDoctor = factory.getOne(Doctor);
exports.getAllDoctors = factory.getAll(Doctor);

// Do NOT update passwords with this!
exports.updateDoctor = factory.updateOne(Doctor);
exports.deleteDoctor = factory.deleteOne(Doctor);
