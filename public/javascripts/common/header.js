// 头部对象构造函数

function Header(){
    this.createDom();
    this.createModal();
    this.addListener();
    this.load();
}
//头部导航模板
Header.template = `
<nav class="navbar navbar-default navbar-inverse">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>

              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">拉钩管理系统</a>
          </div>
      
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="/">首页<span class="sr-only">(current)</span></a></li>
              <li><a href="/html/position.html">职位管理</a></li>
  
            </ul>
            <ul class="nav navbar-nav navbar-right not_login">
              <li><a href="#"  class="link-login"  data-toggle="modal" data-target="#myModal_a">登录</a></li> 
              <li><a href="#"  class= "link-regiter" data-toggle="modal" data-target="#myModal">注册</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right hide login_success">
              <li><a class ="xx" href="#"  >你好！</a></li> 
              <li><a class = "link-logout" href="#" >注销</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
`
//原型
$.extend(Header.prototype,{
//创建DOM元素并渲染
    createDom(){
        $(Header.template).appendTo("header");
    },
    //创建模态框
    createModal(){
      new LoginModal();
      new Register();     
    },
    load(){ 
      //页面加载时判断是否有用户登录过 sessionStorage.loginUser 是json格式
      let user = sessionStorage.loginUser;
      if(user) {
        user = JSON.parse(user);
        console.log(user);
        $(".login_success")
          .removeClass("hide")
          $(".xx").text(`你好：${user.username}`);
          $(".not_login").remove();
      }
    },
    //注册验证码
    addListener(){
      //点击登录，注册链接
      $(".link-login,.link-regiter").on("click",this.genCaptchaHandler);
      //点击注销链接
      $(".link-logout").on("click",this.logoutHandler);
    },
    //生成验证码
    genCaptchaHandler(){
      //先到查找你public中查找，找不到再到路由中间件中查找
      $.get("/captcha/gencode",(data) =>{
        // console.log(data);
        $(".code_img").html(data);
      },"text");
    },
    //注销
    logoutHandler(){
      //移除会话
      sessionStorage.removeItem("loginUser");
      //跳转页面
      window.location.href = "/index.html";
    }
});

new Header();