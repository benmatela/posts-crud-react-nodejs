import axios from "axios";

const postApiURL = "https://jsonplaceholder.typicode.com/posts";
// const postApiURL = "http://localhost:3001/api/v1/posts";

export const getPosts = async () => {
  try {
    return await axios.get(postApiURL);
  } catch (error) {
    return error;
  }
};

export const getPostById = async (id) => {
  try {
    return await axios.get(`${postApiURL}/${id}`);
  } catch (error) {
    return error;
  }
};

export const deletePostById = async (id) => {
  try {
    return await axios.delete(`${postApiURL}/${id}`);
  } catch (error) {
    return error;
  }
};

export const addPost = async (post) => {
  try {
    return await axios.post(postApiURL, post);
  } catch (error) {
    return error;
  }
};

export const updatePost = async (post) => {
  try {
    return await axios.put(postApiURL, post);
  } catch (error) {
    return error;
  }
};
