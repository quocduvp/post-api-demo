class CustomException extends Error {
  constructor(code, ...args) {
    super();
    this.name = "CustomException";
    this.code = code.name ? code.name : "OTHER_CODE";
    this.statusCode = code.statusCode ? code.statusCode : 400;
    this.message = code.message ? code.message : "Error exception";
    this.details = args;
  }
}
class UnknownException extends Error {
  constructor(message, ...args) {
    super();
    this.name = "UnknownException";
    this.code = "OTHER_CODE";
    this.statusCode = 400;
    this.message = message || "Error exception";
    this.details = args;
  }
}

module.exports = {
  CustomException,
  UnknownException,
};
