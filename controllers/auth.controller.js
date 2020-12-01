const bcrypt = require("../common/bcrypt");
const errorCode = require("../common/errorCode");
const { CustomException } = require("../common/exceptions");
const jwt = require("../common/jwt");
const Model = require("../models");

class AuthController {
  constructor() {
    this.User = new User();
  }
}

class User {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const passwordHash = bcrypt.genPassword(password);
      const emailToken = Math.floor(Math.random() * 999999) + 100000;
      const checkEmail = await Model.User.findOne({
        where: {
          email,
        },
      });
      if (checkEmail) {
        throw new CustomException(errorCode.AUTH_06);
      }
      const user = await Model.User.create({
        email,
        password: passwordHash,
        is_verify_mail: false,
        verify_mail_token: emailToken,
      });
      // send mail verify code

      res.json({
        message: "Register successful",
        step: "verify_email",
        account: {
          id: user.id,
          email,
          verify_mail_token: user.verify_mail_token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(req, res, next) {
    try {
      const { email, verifyEmailToken } = req.body;
      const user = await Model.User.findOne({
        where: {
          email,
          is_verify_mail: false,
          verify_mail_token: verifyEmailToken,
        },
      });
      if (!user) {
        throw new CustomException(errorCode.AUTH_07);
      }
      const user = await user.update({
        is_verify_mail: true,
        verify_mail_token: null,
      });

      res.json({
        message: "Email verify successful",
        step: "login",
      });
    } catch (error) {
      next(error);
    }
  }

  async forgotEmail(req, res, next) {}

  async resendVerifyEmail(req, res, next) {
    try {
      const { email } = req.body;
      const user = await Model.User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        throw new CustomException(errorCode.AUTH_03);
      }
      if (!user.is_verify_mail) {
        throw new CustomException(errorCode.AUTH_08);
      }
      const emailToken = Math.floor(Math.random() * 999999) + 100000;
      const user = await user.update({
        verify_mail_token: emailToken,
      });

      res.json({
        message: "Resend verify email successful",
        step: "verify_email",
        account: {
          id: user.id,
          email,
          verify_mail_token: user.verify_mail_token,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await Model.User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        // throw error
        throw new CustomException(errorCode.AUTH_03);
      }
      if (!bcrypt.verifyPassword(password, user.password)) {
        // throw error
        throw new CustomException(errorCode.AUTH_05);
      }
      if (!user.is_verify_mail) {
        // throw error
        throw new CustomException(errorCode.AUTH_04);
      }

      user = user.toJSON();
      delete user.password;
      const token = await jwt.encode(user);
      return res.json({
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
