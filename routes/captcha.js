const express = require('express');
const router = express.Router();
const Captch = require("../services/captcha.js")
/* GET users listing. */
//http://localhost:3000/users/
//生成验证码 找到captcha.js方法
router.get('/gencode', Captch.genCaptcha);

//效验验证码
router.get('/verify',Captch.verifyCaptcha);


module.exports = router;
