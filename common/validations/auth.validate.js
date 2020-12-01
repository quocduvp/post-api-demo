const Joi = require("joi");
const { UnknownException } = require("../exceptions");

class AuthValidation {
  register(req, res, next) {
    const schema = Joi.object()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().trim().required(),
        confirm_password: Joi.any()
          .valid(Joi.ref("password"))
          .required()
          .error((error) => {
            return new Error("confirm password must match password");
          }),
      })
      .options({
        stripUnknown: true,
      });
    const result = schema.validate(req.body);
    if (result.error) {
      throw new UnknownException(result.error.message, result.error);
    }
    req.body = result.value;
    return next();
  }

  verifyEmail(req, res, next) {
    const schema = Joi.object()
      .keys({
        email: Joi.string().email().required(),
        verifyEmailToken: Joi.string().trim().required(),
      })
      .options({
        stripUnknown: true,
      });
    const result = schema.validate(req.body);
    if (result.error) {
      throw new UnknownException(result.error.message, result.error);
    }
    req.body = result.value;
    return next();
  }

  resendVerifyEmail(req, res, next) {
    const schema = Joi.object()
      .keys({
        email: Joi.string().email().required(1),
      })
      .options({
        stripUnknown: true,
      });
    const result = schema.validate(req.body);
    if (result.error) {
      throw new UnknownException(result.error.message, result.error);
    }
    req.body = result.value;
    return next();
  }

  login(req, res, next) {
    const schema = Joi.object()
      .keys({
        email: Joi.string().email().required(1),
        password: Joi.string().trim().required(),
      })
      .options({
        stripUnknown: true,
      });
    const result = schema.validate(req.body);
    if (result.error) {
      throw new UnknownException(result.error.message, result.error);
    }
    req.body = result.value;
    return next();
  }
}

module.exports = AuthValidation;
