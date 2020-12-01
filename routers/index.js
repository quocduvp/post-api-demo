const router = require("express").Router();

router.use("/v1", require("./v1"));
router.get("/seed", async (req, res) => {
  // require('../models').Post.destroy({})
  await require("../models").Post.bulkCreate(
    require("../mocks/mock-data-posts.json")
  );
  await require("../models").User.bulkCreate(
    require("../mocks/mock-data-users.json")
  );
  res.json({ message: true });
});
module.exports = router;
