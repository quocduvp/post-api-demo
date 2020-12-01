const validations = require("../../../common/validations");
const controllers = require("../../../controllers");

const router = require("express").Router();

router.post(
  "/register",
  validations.Auth.register,
  controllers.Auth.User.register
);

router.post(
  "/verify-email",
  validations.Auth.verifyEmail,
  controllers.Auth.User.verifyEmail
);

router.post(
  "/resend-verify-email",
  validations.Auth.resendVerifyEmail,
  controllers.Auth.User.resendVerifyEmail
);

router.post("/login", validations.Auth.login, controllers.Auth.User.login);

router.post(
  "/forgot-password",
  validations.Auth.resendVerifyEmail,
  controllers.Auth.User.forgot
);

router.post(
  "/confirm-forgot-password",
  validations.Auth.confirmForgotPassword,
  controllers.Auth.User.confirmForgotPassword
);

module.exports = router;
