const controllers = require("../../../controllers");
const validations = require("../../../common/validations");
const middlewares = require("../../../middlewares");
const router = require("express").Router();

router.get(
  "/",
  validations.paginationValidate,
  middlewares.accessGetPost,
  controllers.Post.User.findAll
);
router.get("/:postId", controllers.Post.User.details);

module.exports = router;
