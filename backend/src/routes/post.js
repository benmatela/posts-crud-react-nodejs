const express = require("express");
const router = express.Router();
const postService = require("../services/post");
const logging = require("../utils/logging");

const NAMESPACE = "Post Routes";

router.get("/posts", async (req, res) => {
  logging.info(NAMESPACE, "/posts called.");
  try {
    return await postService.getPosts();
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
});

module.exports = router;
