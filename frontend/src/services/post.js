import axios from "axios";

export const getPosts = async () => {
  // Add Pagination
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = async (query) => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const deletePostById = async (id) => {
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const addPost = async (post) => {
  return await axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
};

export const updatePost = async (post) => {
  return await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
};