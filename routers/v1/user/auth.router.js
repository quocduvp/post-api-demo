const router = require("express").Router();

router.post("/register", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/verify-phone", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/resend-verify-phone", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/login", (req, res, next) => {
  res.json({ message: "hello" });
});

router.post("/forgot-password", (req, res, next) => {
  res.json({ message: "hello" });
});

module.exports = router;
