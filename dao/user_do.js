const {User} = require("./model.js");

const UserDao = {
    save(userinfo){
        const user = new User(user);
        //数据表现层返回疏浚
        return user.save();//返回promise对象
    },
    find(){},
    update(){},
    delete(){}
};
module.exports =UserDao;