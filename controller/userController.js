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
