const {Position} = require("./model.js");

const PositionDao = {
    save(positioninfo){
        return new Position(positioninfo).save();
    },
    //安页查找职位信息
    findByPage(page){
        //假定每页显示的5条数据
        const pageSize = 5;
        //查询
        const query = Position.find(); //查询结果集
        const count = query.count()//纪录条数
        const Position = Position.find().skip((page-1)*pageSize).limit(pageSize);
        return {count,Position}

    },
    updata(){
        
    },
    find(){

    },
    delete(){

    },
}
module.exports = PositionDao;