var express = require('express');
var router = express.Router();
const UserService = require("../services/user_services.js")
/* GET users listing. */
//http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//用户登录
//http://localhost:3000/users/login
router.post("/login",UserService.login);

//http://localhost:3000/users/register
router.post("/register",UserService.register)
//用户注册
// router.post("/register", function(res,res,next){
//   console.log('post register OK!');
//   UserService.register(res,res,next); 
// });

module.exports = router;
