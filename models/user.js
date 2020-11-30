"use strict";
const Sequelize = require("sequelize");
const constant = require("../common/constant");
const context = require("../services/sequelize.service");

const User = context.define(
  "users",
  {
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
  },
  {
    createdAt: "created_at",
    updatedAt: false,
    tableName: "Users",
    hooks: {},
  }
);

module.exports = User;
