const logging = require("../utils/logging");
const axios = require("axios");
const NAMESPACE = "Post Service";

const getPosts = async () => {
  logging.info(NAMESPACE, "getPosts() called.");
  try {
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return post;
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

module.exports = {
  getPosts: getPosts,
};
