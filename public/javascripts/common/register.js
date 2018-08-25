function Register(){
    this.createDom();
    this.addListener();
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
        <form>
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
            <label for="loginCode">验证码</label>
            <input type="text" id="loginCode1" placeholder="验证码">
            <p class="code_img">这是个验证码图片</p>
            
          </div>
                <button type="submit" class="btn btn-default">注册</button>
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
        $(".btn-default").on("click",this.loginHandler);
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

    }
})