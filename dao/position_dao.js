const {Position} = require("./model.js");

const PositionDao = {
    save(positioninfo){
        return new Position(positioninfo).save();
    },
    updata(){
        
    },
    find(){

    },
    delete(){

    },
}
module.exports = PositionDao;