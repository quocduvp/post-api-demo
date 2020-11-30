"use strict";
const constant = require("../common/constant");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100),
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      is_verify_mail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      verify_mail_token: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.INTEGER,
        defaultValue: constant.ROLES.USER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
