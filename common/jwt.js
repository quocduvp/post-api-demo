const jwt = require("jsonwebtoken");
const errorCode = require("./errorCode");
const { CustomException } = require("./exceptions");
const secretKey = process.env.JWT_SECRET;

const encode = async (payload) => {
  try {
    const token = await jwt.sign(
      {
        ...payload,
      },
      secretKey,
      {
        expiresIn: "1days",
        algorithm: "HS256",
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
};

const verifyToken = async (headers) => {
  try {
    const authorization = headers["authorization"];
    if (!authorization) {
      throw new CustomException(errorCode.AUTH_02);
    }
    const [type, token] = authorization.split(" ");
    const payload = await jwt.verify(token, secretKey);
    if (!payload) {
      throw new CustomException(errorCode.AUTH_02);
    }
    return payload;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  encode,
  verifyToken,
};
