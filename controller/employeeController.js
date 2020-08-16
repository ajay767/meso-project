const employee = require('./../models/employeeModel');

exports.postNewUser = async (req, res) => {
  try {
    const newEmployee = await employee.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: newEmployee
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.getAllEmployee = async (req, res) => {
  try {
    const data = await employee.find();
    res.status(200).json({
      status: 'success',
      message: data
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failure',
      message: error
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await employee.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'Deleted user',
      message: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.deleteAllEmployee = async (req, res) => {
  try {
    await employee.deleteMany({});
    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};
