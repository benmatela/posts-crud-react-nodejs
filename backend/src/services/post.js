const logging = require("../utils/logging");
const axios = require("axios");
const NAMESPACE = "Post Service";

const getPosts = async () => {
  logging.info(NAMESPACE, "getPosts() called.");
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const getById = async (id) => {
  logging.info(NAMESPACE, "getPosts() called.");
  try {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

module.exports = {
  getPosts,
  getById,
};
