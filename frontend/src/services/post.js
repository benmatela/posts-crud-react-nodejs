import axios from "axios";

const postApiURL = "http://localhost:3001/api/v1/posts";

export const getPosts = async () => {
  return await axios.get(postApiURL);
};

export const getPostById = async (id) => {
  return await axios.get(`${postApiURL}/${id}`, );
};

export const deletePostById = async (id) => {
  return await axios.delete(`${postApiURL}/${id}`);
};

export const addPost = async (post) => {
  return await axios.post(`${postApiURL}`, post);
};

export const updatePost = async (post) => {
  return await axios.put(`${postApiURL}/${post.id}`, post);
};
