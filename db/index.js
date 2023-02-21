let mysql = require("mysql");

let db = mysql.createPool({
  host: "localhost", //数据库IP地址
  user: "root", //数据库登录账号
  password: "root123", //数据库登录密码
  database: "nodetest", //要操作的数据库
});

module.exports = db;
