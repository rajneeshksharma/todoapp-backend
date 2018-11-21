var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',userCtrl.addUser);
router.post('/signin',userCtrl.loginUser);
router.post('/socialuser',userCtrl.signupSocial);

module.exports = router;
