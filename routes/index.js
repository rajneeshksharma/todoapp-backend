var express = require('express');
var router = express.Router();
const passport = require('passport');
const todoCntrl = require('../controllers/todo.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'todoApp' });
});
// router.get('/msg',passport.authenticate('jwt',{session:false}),);

router.post('/todos',passport.authenticate('jwt',{session:false}), todoCntrl.getTodo);
router.post('/addtodo',passport.authenticate('jwt',{session:false}), todoCntrl.addTodo);
router.get('/rmtodo/:id',passport.authenticate('jwt',{session:false}), todoCntrl.rmTodo);
router.get('/tododone/:id',passport.authenticate('jwt',{session:false}), todoCntrl.iscomplete);


module.exports = router;
