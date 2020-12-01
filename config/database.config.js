require("./env.config");
module.exports = Object.freeze({
  dev: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    operatorsAliases: 0,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
  stage: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    operatorsAliases: 0,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
  production: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres",
    operatorsAliases: 0,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 100000,
    },
  },
});
