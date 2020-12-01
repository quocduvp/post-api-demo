const middlewares = require("../../../middlewares");

const router = require("express").Router();

router.use("/auth", require("./auth.router"));
router.use("/posts", middlewares.authorizeUser, require("./post.router"));
module.exports = router;
