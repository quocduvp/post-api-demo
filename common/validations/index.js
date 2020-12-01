const Joi = require("joi");
const { UnknownException } = require("../exceptions");
const AuthValidation = require("./auth.validate");
class Validation {
  constructor() {
    this.Auth = new AuthValidation();
  }

  paginationValidate(req, res, next) {
    const schema = Joi.object()
      .keys({
        page: Joi.number().min(1).default(1),
        limit: Joi.number().min(1).max(500).default(20),
        search: Joi.string().allow("").default(""),
        order: Joi.object().allow(null),
        where: Joi.object().allow(null),
      })
      .options({
        stripUnknown: true,
      });
    const result = schema.validate(req.query);
    if (result.error) {
      throw new UnknownException(result.error.message, result.error);
    }
    req.query = result.value;
    return next();
  }
}

module.exports = new Validation();
