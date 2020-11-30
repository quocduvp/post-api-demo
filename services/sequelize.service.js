const Sequelize = require("sequelize");
const database = require("../config/database.config");
const db = new Sequelize.Sequelize({
  ...database[process.env.NODE_ENV],
});

db.authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
