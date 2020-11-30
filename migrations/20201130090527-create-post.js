"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Posts", {
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
        type: Sequelize.TEXT,
      },
      call_to_action_url: {
        type: Sequelize.TEXT,
      },
      image_url: {
        type: Sequelize.TEXT,
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
        type: Sequelize.STRING(1000),
      },
      page_picture: {
        type: Sequelize.TEXT,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Posts");
  },
};
