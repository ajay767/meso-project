const user = require('./../models/userModel');

exports.postNewUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: newUser
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUser = await user.find();
    res.status(200).json({
      status: 'success',
      message: allUser
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.getUserByID = async (req, res) => {
  try {
    const myuser = await user.find({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      message: myuser
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await user.update(req.body);
    res.status(201).json({
      status: 'successfully updated',
      message: updatedUser
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: error
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
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

exports.deleteAllUser = async (req, res) => {
  try {
    await user.deleteMany({});
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
