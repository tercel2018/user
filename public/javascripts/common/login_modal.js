//登录模态框
function LoginModal(){
    this.createDom();
    //调用事件监听
    this.addListener();
}

LoginModal.template = `
<!-- 验证码图片 -->
<div class="modal fade" tabindex="-1" role="dialog" id="myModal_a">

    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">用户登录</h4>
        </div>
        <div class="modal-body">
           <!-- 表单 -->
          <form class= "login_form">
              <div class="form-group">
                <label for="exampleInputEmail1" >用户名</label>
                <input type="email" class="form-control" name ="username" placeholder="请输入用户名">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control"  name = "password" placeholder="输入密码">
              <div class="form-group"> 
                <label for="loginCode">验证码</label>
                <p class="help-block code_img_a">验证码</p>
                <input type="text" id="loginCode" placeholder="验证码">
                <span class="input-group-addon code-info">信息</span>
                
              </div>
                <div class="modal-footer">
                  <button type="button" class="btn login btn-default">登录</button>
                </div>
            </form>
        </div>
       
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->

`;
$.extend(LoginModal.prototype,{
    //创建DOM元素
    createDom(){
        $(LoginModal.template).appendTo("body");
    },
    //注册事件监听
    addListener(){
      //失去焦点效验验证码
      $("#loginCode").on("blur",this.verifyHandler);
      //点注册按钮
        $(".login").on("click",this.loginHandler);

    },
    //效验验证码
    verifyHandler(){
      //获取输入的验证码值
      var code = $("#loginCode").val();
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
      var data = $(".login_form").serialize();
      //ajax提交登录处理
      $.post("/users/login",data,(resData)=>{
        console.log(resData);
      }).done(()=>{
        //modal("hide"); 手动隐藏模态框
        $("#myModal_a").modal("hide");
      }).done(()=>{
        $(".login_success").removeClass("hide").siblings(".not_login").remove();
      })

    }

})

