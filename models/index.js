"use strict";
const User = require("./user");
const Post = require("./post");
class Model {
  static instance;
  constructor() {
    this.User = User;
    this.Post = Post;
  }

  /**
   * @function getInstance
   * @returns {Model}
   */
  static getInstance() {
    if (!Model.instance) {
      Model.instance = new Model();
    }
    return Model.instance;
  }
}

module.exports = Model.getInstance();
