import axios from "axios";

export const getPosts = async () => {
  return await axios.get("http://localhost:3001/api/v1/posts");
};

export const getPostById = async (id) => {
  return await axios.get(`http://localhost:3001/api/v1/posts/${id}`, );
};

export const deletePostById = async (id) => {
  return await axios.delete(`http://localhost:3001/api/v1/posts/${id}`);
};

export const addPost = async (post) => {
  return await axios.post(`http://localhost:3001/api/v1/posts`, post);
};

export const updatePost = async (post) => {
  return await axios.put(`http://localhost:3001/api/v1/posts/${post.id}`, post);
};
