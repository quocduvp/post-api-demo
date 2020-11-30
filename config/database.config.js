require("./env.config");
module.exports = Object.freeze({
  dev: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
  stage: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    operatorsAliases: 0,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
  production: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
});
