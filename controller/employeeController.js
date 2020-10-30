const employee = require('./../models/employeeModel');
const catchAsync = require('./../utils/catchAsync');

exports.postNewUser = catchAsync(async (req, res, next) => {
  const newEmployee = await employee.create(req.body);
  res.status(200).json({
    status: 'Success',
    data: newEmployee
  });
});

exports.getEmployee = catchAsync(async (req, res, next) => {
  const currentEmployee = await employee.findById(req.params.id);

  if (!currentEmployee) {
    res.status(400).json({
      status: 'Fail',
      message: 'No employee found'
    });
  }

  res.status(200).json({
    status: 'success',
    message: currentEmployee
  });
});

exports.updateEmployee = catchAsync(async (req, res, next) => {
  const currentEmployee = employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!currentEmployee) {
    res.status(400).json({
      status: 'Fail',
      message: 'No employee found'
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      currentEmployee
    }
  });
});

exports.getAllEmployee = catchAsync(async (req, res, next) => {
  const data = await employee.find();
  res.status(200).json({
    status: 'success',
    message: data
  });
});

exports.deleteEmployee = catchAsync(async (req, res, next) => {
  const currentEmployee = await employee.findByIdAndDelete(req.params.id);
  if (!currentEmployee) {
    res.status(400).json({
      status: 'Fail',
      message: 'No employee found'
    });
  }
  res.status(204).json({
    status: 'Deleted user',
    message: null
  });
});

exports.deleteAllEmployee = catchAsync(async (req, res, next) => {
  await employee.deleteMany({});
  res.status(204).json({
    status: 'success'
  });
});
