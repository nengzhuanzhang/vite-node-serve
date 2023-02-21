let express = require("express");
let router = express.Router();
let user = require("./api/user");

router.get("/user", user.get);
router.post("/user/add", user.add);
router.delete("/user/delete/:id", user.delete);
router.put("/user/edit", user.edit);

module.exports = router;
