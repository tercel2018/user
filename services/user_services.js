const UserDao = require("../dao/user_do.js");

const UserService = {
    login() {

    },
    //注册
    register(req,res,next){
        //获取在请求中传递的注册用户信息
        //用express  req.body方法获取post请求
            const{username,password,email} = req.body;
        //验证用户名是否被注册
        //...
        //保存用户信息
        UserDao
        .save({username,password,email})
        .then((date)=>{
            res.json({res_code:1,res_error:"",res_body:date});
        })
        //捕获异常
        .catch((err)=>{
            res.json({res_code:-1,res_error:"",res_body:{}});
        })

    }
};
module.exports = UserService