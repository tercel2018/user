const UserDao = require("../dao/user_do.js");
const bcrypt = require('bcrypt');//加密

const UserService = {
    //登录
    login(req,res,next) {
        //获取登录时的用户名与密码
        const{username,password} = req.body;
        //根据用户名查询用户信息
        UserDao
        .find({username})
        .then(data=>{
            console.log(data);
            if(data.length ===1){
                const _pass =  data[0].password;
                if(bcrypt.compareSync(password,_pass)){
                    res.json({res_code:1,res_error:"",res_body:data[0]});
                }else{
                    res.json({res_code:0,res_error:"not exist",res_body:{}});
                }
            }else{
                res.json({res_code:0,res_error:"not exist",res_body:{}});
            }
            // console.log(data);
            // res.send(data);
        })
        .catch(err=>{
            res.json({res_code:-1,res_error:"",res_body:{}});
        });
    },
    //注册
    register(req,res,next){
        //获取在请求中传递的注册用户信息
        //用express  req.body方法获取post请求 结构赋值
            const{username,password,email} = req.body;
        //验证用户名是否被注册
        //...

        // //密码加密
        const passwordBcrypt = bcrypt.hashSync(password,10);
        console.log(passwordBcrypt),
        //保存用户信息
        UserDao
        .save({username,password:passwordBcrypt,email})
        .then((data)=>{
            res.json({res_code:1,res_error:"",res_body:data});
        })
        //捕获异常
        .catch((err)=>{
            res.json({res_code:-1,res_error:"",res_body:{}});
        })

    }
};
module.exports = UserService