const { Op, Sequelize } = require("sequelize");
const paginate = require("../common/paginate");
const Model = require("../models");

class PostController {
  constructor() {
    this.User = new User();
  }
}

class User {
  async findAll(req, res, next) {
    try {
      const { page = 1, limit, order = {}, search = "", where } = req.query;
      // pagination
      let orderArr = paginate.getOrders([], order);
      let { offset } = paginate.getLimitOffset(page, limit);
      const result = await Model.Post.findAndCountAll({
        order: orderArr,
        limit: limit,
        offset,
        distinct: true,
        where: {
          ...where,
          [Op.or]: [
            Sequelize.where(
              Sequelize.fn(
                "CONCAT",
                Sequelize.fn("IFNULL", Sequelize.col("description"), ""),
                Sequelize.fn("IFNULL", Sequelize.col("page_name"), ""),
                Sequelize.fn("IFNULL", Sequelize.col("product_class"), ""),
                Sequelize.fn("IFNULL", Sequelize.col("country"), "")
              ),
              "LIKE",
              `%${search}%`
            ),
          ],
        },
      });
      return res.json(paginate.responseData(limit, page, result));
    } catch (error) {
      next(error);
    }
  }

  async details(req, res, next) {
    try {
      const { postId } = req.params;
      const result = await Model.Post.findOne({
        where: {
          id: postId,
        },
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
