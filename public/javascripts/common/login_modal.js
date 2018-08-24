//登录模态框
function LoginModal(){
    this.createDom();
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
          <form>
              <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="email" class="form-control" id="password" placeholder="请输入用户名">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="password_a" placeholder="输入密码">
              <div class="form-group"> 
                <label for="loginCode">验证码</label>
                <input type="text" id="loginCode" placeholder="验证码">
                <p class="help-block">这是个验证码图片</p>
              </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-default">登录</button>
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
        
    }

})

