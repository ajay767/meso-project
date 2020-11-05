const express = require('express');
const doctorController = require('./../controller/doctorController');
const authController = require('./../controller/authControllerDoctor');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', doctorController.getMe, doctorController.getUser);
router.patch('/updateMe', doctorController.updateMe);
router.delete('/deleteMe', doctorController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(doctorController.getAllUsers)
  .post(doctorController.createUser);

router
  .route('/:id')
  .get(doctorController.getUser)
  .patch(doctorController.updateUser)
  .delete(doctorController.deleteUser);

module.exports = router;

// const express = require('express');

// const employeeController = require('./../controller/doctorController');

// const router = express.Router();

// router
//   .route('/')
//   .get(employeeController.getAllEmployee)
//   .post(employeeController.postNewUser)
//   .delete(employeeController.deleteAllEmployee);

// router
//   .route('/:id')
//   .get(employeeController.getEmployee)
//   .patch(employeeController.updateEmployee)
//   .delete(employeeController.deleteEmployee);

// module.exports = router;
