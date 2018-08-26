//引入mongoose
const mongoose = require("mongoose");
//连接数据库 默认端口27017
mongoose.connect('mongodb://localhost/test/user');
//用户模型
const User = mongoose.model("user",{
    username:String,
    password:String,
    email:String
});
//职位模型
module.exports = {User};