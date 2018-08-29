const PositionDao = require("../dao/position_dao.js");

const PositionService = {
    //添加职位
    add(req,res,next){
        //重请求主体中解构文本数据    从请求主体中拿到
        const{post,name,suffer,city,money} = req.body;
        //将上传的文件名保存
        let logo = "";
        if(req.file)
            logo = req.file.filename;
        //保存到数据库
        PositionDao
            .save({logo,post,name,suffer,city,money})
            .then(data =>{
                res.json({res_code:1,res_error:"",res_body:data})
            })
            .catch(err=>{
                res.json({res_code:-1,res_error:err,res_body:{}})
            });
    },
    //分页查询职位
    letByPage(req,res,next){
        //获取当前查询的页码
        let {page} = req.query;
        page = page ||1;
        //调用数据库查询方法
        PositionDao
            .findByPage(page)
            .then(data =>{
                console.log(data);
            })
            .catch();
        
    }
}
module.exports = PositionService;