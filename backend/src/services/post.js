const logging = require("../utils/logging");
const axios = require("axios");

const NAMESPACE = "Post Service";

const apiURL = process.env.JSON_PLACEHOLDER_API_URL + '/posts';

const getPosts = async () => {
  // Add pagination
  logging.info(NAMESPACE, "posts() called.");
  try {
    return await axios.get(apiURL);
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const getById = async (id) => {
  logging.info(NAMESPACE, "posts():id called.");
  try {
    return await axios.get(`${apiURL}/${id}`);
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const update = async (post) => {
  logging.info(NAMESPACE, "posts() called.");
  try {
    logging.info(NAMESPACE, post);
    const updated = await axios.put(`${apiURL}/${post.id}`, post);
    return updated;
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const add = async (post) => {
  logging.info(NAMESPACE, "posts() called.");
  try {
    return await axios.post(apiURL, post);
  } catch (error) {
    logging.error(NAMESPACE, JSON.stringify(error));
    return error;
  }
};

const remove = async (id) => {
  logging.info(NAMESPACE, "posts():id called.");
  try {
    return await axios.delete(`${apiURL}/${id}`);
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
