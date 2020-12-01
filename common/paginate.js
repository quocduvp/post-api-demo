const _ = require("lodash");
class Paginate {
  getLimitOffset(page, limit) {
    // no pagination
    if (!limit)
      return {
        offset: null,
        limit: null,
      };

    limit = parseInt(limit);
    if (page - 1 <= 0) {
      page = 0;
    } else {
      page = (page - 1) * limit;
    }
    return {
      offset: page,
      limit,
    };
  }

  getOrders(defaults = [], order) {
    let orderArr = defaults;

    if (order && !_.isEmpty(order)) {
      orderArr = [];
      for (let i in order) {
        const field = _.split(i, ".");

        orderArr.push([...field, order[i]]);
      }
    }

    return orderArr;
  }

  responseData = (limit, page, data) => {
    let { totalRow, totalPage } = this.getPaginationResult(limit, data.count);

    return {
      page: parseInt(page),
      limit: parseInt(limit),
      totalPage,
      totalRow,
      data: data.rows,
    };
  };

  getPaginationResult = (limit, totalRow) => {
    let totalPage = Math.ceil(totalRow / limit);
    return {
      limit: limit,
      totalRow,
      totalPage,
    };
  };
}

module.exports = new Paginate();
