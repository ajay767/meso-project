const express = require('express');
const viewController = require('../controller/viewController');
const router = express.Router();

router.route('/').get(viewController.getHomePage);

router.get('/login', (req, res) => {
  res.render('login.pug');
});

router.get('/signup', (req, res) => {
  res.render('signup.pug');
});

router.get('/me', (req, res) => {
  res.render('me-user.pug', {
    userID: `2824734739id44m`,
    pageName: 'My profile'
  });
});

router.get('/font-check', (req, res) => {
  res.render('font.pug');
});

router.get('/notification', viewController.getNotification);
router.get('/doctor/:docID', viewController.getDoctorProfile);
router.get('/department/:department', viewController.getDepartment);

router.get('/about', (req, res) => {
  res.render('about.pug');
});
module.exports = router;
