const constant = require("../common/constant");
const errorCode = require("../common/errorCode");
const { CustomException } = require("../common/exceptions");
const jwt = require("../common/jwt");
const Model = require("../models");

class Middleware {
  static intance;

  async authorizeUser(req, res, next) {
    try {
      const payload = await jwt.verifyToken(req.headers);
      const user = await Model.User.findByPk(payload.id, {
        attributes: {
          exclude: ["password"],
        },
      });
      if (!user) {
        throw new CustomException(errorCode.AUTH_03);
      }
      req.user = user.toJSON();
      next();
    } catch (error) {
      next(error);
    }
  }

  async accessGetPost(req, res, next) {
    try {
      const user = req.user;
      if (user.role === constant.ROLES.USER) {
        req.query = {
          ...req.query,
          limit: req.query.limit > 108 ? 108 : req.query.limit,
        };
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * @function getInstance
   * @returns {Middleware}
   */
  static getInstance() {
    if (!Middleware.intance) {
      Middleware.intance = new Middleware();
    }
    return Middleware.intance;
  }
}

module.exports = Middleware.getInstance();
