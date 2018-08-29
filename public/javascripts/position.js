function Position(){
    this.addListener();
}
$.extend(Position.prototype,{
    //注册事件监听
    addListener(){
        $(".btn_pso").on("click",this.addListenerHandler);
    },
    addListenerHandler(){
        // const data = $(".add_form").serialize();
        // $.post("/position/add",data,(data)=>{
        //     console.log(data);
        // },"json")
        //创建formdat数据
        const formData = new FormData($(".add_form").get(0));
        //使用
        $.ajax({
            type:"post",
            url:"/position/add",
            data:formData,
            processData:false,//静止将data转换为查询字符串
            contentType:false,//不设置contentType
            success:function(data){
                console.log(data);
            },
            dataType:"json"
        })
    }
});
new Position();