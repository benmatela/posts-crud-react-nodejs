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

const update = async (post) => {
  logging.info(NAMESPACE, "update() called.");
  try {
    const updated = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
    return updated;
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const add = async (post) => {
  logging.info(NAMESPACE, "add() called.");
  try {
    return await axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const remove = async (id) => {
  logging.info(NAMESPACE, "remove() called.");
  try {
    return await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

module.exports = {
  getPosts,
  getById,
  remove,
  add,
  update,
};
