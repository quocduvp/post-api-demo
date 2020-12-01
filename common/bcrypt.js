const bcrypt = require("bcrypt");
const genPassword = (text) => {
  return bcrypt.hashSync(text, 10);
};

const verifyPassword = (text, hash) => {
  return bcrypt.compareSync(text, hash);
};

module.exports = { genPassword, verifyPassword };
