#后台管理系统
>基于nodeJs+express+mongodb 实现的后台管路系统
项目实现前后端分离
前端页面放在public目录文件下面
>服务器采用的三层分层：表示层--业务逻辑层--数据访问层
public目录下的内容为表示层
servise目录下为业务逻辑层
dao目录为数据访问层


服务器刷新：

	nodemon/supervisor

验证码：`svg-captcha`
	
	https://www.npmjs.com/package/svg-captcha

session：`express-session`

	https://www.npmjs.com/package/express-session

数据库连接：`mongoose` - 连接 mongodb数据库

	https://www.npmjs.com/package/mongoose
	https://mongoosejs.com/

数据库连接：`Sequelize` - 连接 PostgreSQL, MySQL, SQLite and MSSQL... 数据库

	http://docs.sequelizejs.com/

