let db = require("../db/index");

exports.get = (req, res) => {
  let sql = "select * from user";
  db.query(sql, (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    res.send(data);
  });
};

exports.add = (req, res) => {
  const sql1 = "select * from user where name = ?";
  const sql2 = "insert into user(name,age,address) value (?,?,?)";

  db.query(sql1, [req.body.name], (err, data) => {
    if (err) {
      return res.send({
        status: 400,
        message: "操作失败",
      });
    }

    if (data.length > 0) {
      res.send({
        status: 202,
        message: "user already exists",
      });
    } else {
      db.query(
        sql2,
        [req.body.name, req.body.age, req.body.address],
        (err, data) => {
          if (err) {
            return res.send({
              status: 400,
              message: "add fail",
            });
          }
          res.send({
            status: 200,
            message: "add success",
          });
        }
      );
    }
  });
};

exports.delete = (req, res) => {
  const sql = "delete from user where id=?";
  db.query(sql, [req.params.id], (err, data) => {
    if (err) {
      return res.send("错误：" + err.message);
    }
    if (data.affectedRows > 0) {
      res.send({
        status: 200,
        message: "删除成功",
      });
    } else {
      res.send({
        status: 202,
        message: "删除失败",
      });
    }
  });
};

exports.edit = (req, res) => {
  const sql = "update user set name=?,age=?,address=? where id=?";
  db.query(
    sql,
    [req.body.name, req.body.age, req.body.address, req.body.id],
    (err, data) => {
      if (err) {
        return res.send("错误：" + err.message);
      }
      if (data.changedRows > 0) {
        res.send({
          status: 200,
          message: "编辑成功",
        });
      } else {
        res.send({
          status: 202,
          message: "编辑失败",
        });
      }
    }
  );
};
