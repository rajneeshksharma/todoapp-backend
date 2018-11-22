var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
var passport = require('passport');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',userCtrl.addUser);
router.post('/signin',userCtrl.loginUser);
router.post('/socialuser',userCtrl.socialControl);


module.exports = router;
