//逻辑验证码
//引入验证码相关模块
const svgCaptcha = require('svg-captcha');

const Captcha = {
    //生成验证码
    genCaptcha(req,res,next){
        // res.send("验证码");
        //生成svgCaptcha.createMathExpr(options)  数学表达式
        var captcha = svgCaptcha.create({color:true,noise:4,background:"#ccc",ignoreChars: '0o1i'});
        //向session中保存验证码生成字符串
        req.session.captcha = captcha.text;
        //响应返回生成的验证码svg
        res.type('svg'); // 使用ejs等模板时如果报错 res.type('html')
        res.status(200).send(captcha.data);
    },
    //效验验证码
    verifyCaptcha(req,res,next){
        //从请求中获取待效验的验证码字符串
        const {code} = req.query;
        // console.log(code,typeof code);
        // console.log( req.session.captcha);
        //与session中的缓存的验证码对比
        if(code.toUpperCase() ===  req.session.captcha.toUpperCase())
            // res.send("通过")
            //响应json数据
            res.json({res_code:1,res_reeor:"",res_body:{valid:true}})
        else
            res.json({res_code:-1,res_reeor:"",res_body:{valid:false}})
        

    }
}
module.exports = Captcha;