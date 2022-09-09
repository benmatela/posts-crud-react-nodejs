const express = require("express");
const router = express.Router();
const postService = require("../services/post");
const logging = require("../utils/logging");

const NAMESPACE = "Post Routes";

router.get("/posts", async (req, res) => {
  logging.info(NAMESPACE, "/posts called.");
  try {
    const posts = await postService.getPosts();
    return res.send({
      data: posts.data,
    });
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return res.send({
      data: result,
      error: JSON.stringify(error),
    });
  }
});

module.exports = router;
