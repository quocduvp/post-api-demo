const router = require("express").Router();

// user/
router.use("/user", require("./user"));

module.exports = router;
