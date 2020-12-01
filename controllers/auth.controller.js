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
