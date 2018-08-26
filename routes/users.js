var express = require('express');
var router = express.Router();
const UserSerive = require("../services/user_services.js")
/* GET users listing. */
//http://localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//用户登录
//http://localhost:3000/users/login
router.post("/login", function(res,res,next){
  res.send("用户登录处理")
});

//用户注册
router.post("/register", function(res,res,next){
  console.log('post register OK!');
  UserSerive.register(res,res,next); 
});


module.exports = router;
