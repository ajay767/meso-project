const express = require('express');
const userController = require('./../controller/userController');

const router = express.Router();

router.route('/').post(userController.postNewUser);
module.exports = router;
