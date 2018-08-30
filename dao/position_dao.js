const {Position} = require("./model.js");

const PositionDao = {
    //保存职位信息
    save(positioninfo){
        return new Position(positioninfo).save();
    },
    //总记录条数
    count() {
        return Position.find().count();
    },
    //按页查找职位信息
    findByPage(page){
        //假定每页显示的5条数据
        const pageSize = 5;
        return Position.find().skip((page-1)*pageSize).limit(pageSize);      
        //查询
        // const query = Position.find(); //查询结果集
        // const count = query.count();//纪录条数
        // const totallPage = Math.ceil(count/pageSize);       
        // return Position
    },
    updata(){
        
    },
    find(){

    },
    delete(){

    },
}
module.exports = PositionDao;