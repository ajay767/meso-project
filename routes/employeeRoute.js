const express = require('express');

const employeeController = require('./../controller/employeeController');

const router = express.Router();

router
  .route('/')
  .get(employeeController.getAllEmployee)
  .post(employeeController.postNewUser)
  .delete(employeeController.deleteAllEmployee);

router
  .route('/:id')
  .get(employeeController.getEmployee)
  .patch(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = router;
