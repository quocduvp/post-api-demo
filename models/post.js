"use strict";
const Sequelize = require("sequelize");
const context = require("../services/sequelize.service");

const Post = context.define(
  "posts",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    post_id: {
      type: Sequelize.STRING,
    },
    likes: {
      type: Sequelize.INTEGER(8),
      defaultValue: 0,
    },
    shares: {
      type: Sequelize.INTEGER(8),
      defaultValue: 0,
    },
    comments: {
      type: Sequelize.INTEGER(8),
      defaultValue: 0,
    },
    interaction: {
      type: Sequelize.INTEGER(8),
      defaultValue: 0,
    },
    description: {
      type: Sequelize.TEXT(10000),
    },
    call_to_action_url: {
      type: Sequelize.TEXT(10000),
    },
    image_url: {
      type: Sequelize.TEXT(10000),
    },
    facebook_account_id: {
      type: Sequelize.STRING,
    },
    have_seen_at: {
      type: Sequelize.DATE,
    },
    last_seen_at: {
      type: Sequelize.DATE,
    },
    description_url: {
      type: Sequelize.TEXT,
    },
    is_image: {
      type: Sequelize.BOOLEAN,
    },
    is_video: {
      type: Sequelize.BOOLEAN,
    },
    is_activated: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    genre_id: {
      type: Sequelize.INTEGER(4),
    },
    page_id: {
      type: Sequelize.STRING(1000),
    },
    page_name: {
      type: Sequelize.INTEGER(1000),
    },
    page_picture: {
      type: Sequelize.INTEGER(10000),
    },
    country: {
      type: Sequelize.STRING(100),
    },
    ecom_platform_id: {
      type: Sequelize.INTEGER(4),
    },
    product_class: {
      type: Sequelize.STRING(100),
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },
  {
    createdAt: "created_at",
    tableName: "Posts",
    hooks: {},
  }
);

module.exports = Post;
