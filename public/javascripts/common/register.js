function Register(){
    this.createDom();
    this.addListener();
    this.genCaptchaHandler()
}
Register.template =`
  
<!-- 注册页面 模态框 -->
<div class="modal fade" tabindex="-1" role="dialog" id="myModal">

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">用户注册</h4>
      </div>
      <div class="modal-body">
         <!-- 表单 -->
        <form class= "register_form">
            <div class="form-group">
              <label for="exampleInputEmail1">用户名</label>
              <input type="email" class="form-control" id="user" placeholder="请输入用户名">
            
              </div>
            <div class="form-group">
              <label for="exampleInputPassword1">密码</label>
              <input type="password" class="form-control" id="password_a" placeholder="输入密码">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">确认密码</label>
                <input type="password" class="form-control" id="password_b" placeholder="再次输入密码">
              </div>
              <div class="form-group">
                  <label for="exampleInputEmail1">邮箱</label>
                  <input type="email" class="form-control" id="emaill" placeholder="邮箱">
                </div>
            <div class="modal-footer">
            <div class="form-group"> 
            <p class="code_img_b">这是个验证码图片</p>   
            <label for="loginCode">验证码</label>
            <input type="text" id="loginCode_a" placeholder="验证码">
            <span class="input-group-addon code-info">信息</span>             
            
          </div>
                <button type="button" class="btn btn-default">注册</button>
              </div>
          </form>
      </div>
     
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
`;
$.extend(Register.prototype,{
    createDom(){
        $(Register.template).appendTo("body");
    },
     //注册事件监听
     addListener(){
      //失去焦点效验验证码
      $("#loginCode_a").on("blur",this.verifyHandler);
      //点注册按钮
        $(".btn-default").on("click",this.loginHandler,
        this.registerHandler);
    },
     //生成验证码
     genCaptchaHandler(){
      //先到查找你public中查找，找不到再到路由中间件中查找
      $.get("/captcha/gencode",(data) =>{
        // console.log(data);
        $(".code_img_b").html(data);
      },"text")
    },
    //效验验证码
    verifyHandler(){
      //获取输入的验证码值
      var code = $("#loginCode_a").val();
      //aja请求
      $.getJSON("/captcha/verify",{code},(data)=>{
        console.log(data);
        if(data.res_code ===1){
          $(".code-info").text("验证通过")
        }else{
          $(".code-info").text("输入错误")
        }
      })

    },

    //登录业务处理
    loginHandler(){
      //待传到服务器的用户登录数据
      var data = $(".btn-default").serialize();
      //ajax提交登录处理
      $.post("/users/login",data,(resData)=>{
        console.log(resData);
      }).done(()=>{
        //modal("hide"); 手动隐藏模态框
        $("#myModal").modal("hide");
      }).done(()=>{
        $(".login_success").removeClass("hide").siblings(".not_login").remove();
      })

    },
    //注册业务处理
    registerHandler(){
      //待传到服务器的用户注册数据
      var data = $(".register_form").serialize();
      //ajax提交请求
      $.post("/users/register",data,(resData)=>{
        console.log(resData);
      },"json");
    }
    
})