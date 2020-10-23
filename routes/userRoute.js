const express = require('express');
const userController = require('./../controller/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.postNewUser)
  .delete(userController.deleteAllUser);

router
  .route('/:id')
  .patch(userController.updateUser)
  .get(userController.getUserByID)
  .delete(userController.deleteUser);

module.exports = router;
