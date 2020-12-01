const validations = require("../../../common/validations");
const controllers = require("../../../controllers");

const router = require("express").Router();

router.post("/register", validations.Auth.register, (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/verify-phone", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/resend-verify-phone", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/login", validations.Auth.login, controllers.Auth.User.login);

router.post("/forgot-password", (req, res, next) => {
  res.json({ message: "hello" });
});

module.exports = router;
