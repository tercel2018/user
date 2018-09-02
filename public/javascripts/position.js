function Position(){
    this.addListener();
    this.load();
};

Position.listInfoTemplate = `
        <% for(var i = 0; i< positions.length;i++) {%>
        <tr id="list" data-id ="<%= positions[i]._id%>">
            <td><%= i+1 %></td>
            <td><img src="../images/<%= positions[i].logo%>" alt="" style="width:60px"> 图片</td>
            <td><%= positions[i].name %></td>
            <td><%= positions[i].suffer %></td>
            <td><%= positions[i].city %></td>
            <th><%= positions[i].money %></th>
            <th><a class= "updata" data-toggle="modal" data-target="#myModal_up" href="javascript:;">修改</a> 
             <a class="del" href="javascript:;">删除</a></th>
          </tr>
        <%} %>
`;

Position.paginationTemplate = `
<% for (var i = 1; i <= totalPages; i++)  {%>
    <li class="<%= currentPage == i ? 'active' : '' %>"><a href="#"><%= i %></a></li>
<% } %>
` 
$.extend(Position.prototype,{
    //注册事件监听
    addListener(){
        $(".btn_pso").on("click",this.addListenerHandler);
        // 翻页
        $(".pagination").on("click", "li", this.loadByPage);
        $(".list-table").on("click",".del",this.del);
        $(".list-table").on("click",".updata",this.updata);
        $(".btn_pso_up").on("click",this.add_up);
    },
    del(){
        // $(".alert").removeClass("hidden");
        if(window.confirm('你确定要删除吗？')){
            let id = $("#list").data("id");
            $.getJSON("/positions/del?id="+id,data=>{
              if(data.res_code ===1) {
                  $("#list").remove();
              }else{
                 alert("删除失败");
              }
            });
         }else{
            //alert("取消");
            return false;
        };
    },
    updata(){
        let name =  $("#list").children('td').eq(2).text();
        $(".form-a").val(name); 
        let city = $("#list").children('td').eq(3).text();
        $(".form-c").val(city); 
        let post = $("#list").children('td').eq(4).text();
        $(".form-d").val(post); 
        let last = $("#list").children('td').eq(6).text();
        $(".form-e").val(last); 
    },
    add_up(){
        let id = $("#list").data("id");
        //存放id 
       // $('input[name="id"]').val(id);
         $(".id").val(id);
         console.log($(".id").val());
        const formData = new FormData($(".add_up").get(0));
        //使用
        $.ajax({
            type:"post",
            url:"/positions/add_up",
            data:formData,
            processData:false,//静止将data转换为查询字符串
            contentType:false,//不设置contentType
            success:function(data){
                console.log(data);
            },
            dataType:"json"
        })
    },
    //页面加载。查询第一页职位信息
    load(){
        this.loadByPage(1);
    },
    loadByPage(event){
        let page;
		if (typeof event === "number") // 直接传递页码
			page = event;
		else { // 获取待加载页码			
			console.log(event.target)
			page = $(event.target).text();
        }
        
        $.getJSON("/positions/list?page="+page,data=>{
            //待渲染的职位数据
            const positions = data.res_body.data;
            //EJS渲染模板
            const html = ejs.render(Position.listInfoTemplate,{positions});
            //显示
            $(".list-table").html(html);
            //显示页码数据
            const pagination = ejs.render(Position.paginationTemplate, {totalPages: data.res_body.totalPages, currentPage : page})
            $(".pagination").html(pagination);
        })
    },

    addListenerHandler(){
        // const data = $(".add_form").serialize();
        // $.post("/position/add",data,(data)=>{
        //     console.log(data);
        // },"json")
        //创建formdat数据
        const formData = new FormData($(".add_form").get(0));
        //console.log(formData);
        //使用
        $.ajax({
            type:"post",
            url:"/positions/add",
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