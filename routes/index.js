var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WorldChat' });
});
// router.get('/msg',passport.authenticate('jwt',{session:false}),);

module.exports = router;
