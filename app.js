const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser"); // 在express4版本之前的写法
const router = require("./router");

const app = express();
app.use(cors());
// app.use(bodyParser.json()); //配置解析，用于解析json和urlencoded格式的数据
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extends: false }));
app.use(express.json());
app.use(router);

app.listen(9000, () => {
  console.log("success in 9000");
});
