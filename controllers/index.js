const AuthController = require("./auth.controller");
const PostController = require("./post.controller");

class Controller {
  static instance;
  constructor() {
    this.Post = new PostController();
    this.Auth = new AuthController();
  }

  /**
   * @function getInstance
   * @returns {Controller}
   */
  static getInstance() {
    if (!Controller.instance) {
      Controller.instance = new Controller();
    }
    return Controller.instance;
  }
}
module.exports = Controller.getInstance();
