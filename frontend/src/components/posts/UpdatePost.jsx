import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deletePostById, updatePost } from "../../services/post";
import PostModel from "./models/post.model";
import { PostForm } from "./PostForm";

export const UpdatePost = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedPost] = useState(state || {
    selected: new PostModel(0, 0, "", ""),
  });
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loaderSubmitMessage, setLoaderSubmitMessage] = useState("");
  const [loaderDeleteMessage, setLoaderDeleteMessage] = useState("");

  /**
   * Handle PostForm 'submit' event and return data
   * @param {*} data
   */
  const handleSubmitClick = async (data) => {
    setLoaderSubmitMessage("Updating item...");
    setLoaderDeleteMessage("");
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    const updated = await updatePost(data);
    if (updated.status === 200) {
      setSuccessMessage(`Post successfully updated. ID: ${data.id}.`);
    } else {
      setErrorMessage(
        `Error while attempting to update a post. ID: ${data.id}.`
      );
    }
    setLoaderDeleteMessage("");
    setLoaderSubmitMessage("");
    setSubmitting(false);
  };

  /**
   * Handle PostForm 'delete' event and return data
   * @param {*} data
   */
  const handleDeletePostClick = async (data) => {
    setLoaderSubmitMessage("");
    setLoaderDeleteMessage("Deleting item...");
    setDeleting(true);
    setSuccessMessage("");
    setErrorMessage("");
    const deleted = await deletePostById(data.id);
    if (deleted.status === 200) {
      setSuccessMessage(`Post successfully deleted. You will be redirected..`);
      setLoaderDeleteMessage("");
      setLoaderSubmitMessage("");
      setTimeout(() => {
        navigate("/posts");
        setDeleting(false);
      }, 2000);
    } else {
      setErrorMessage(
        `Error while attempting to delete a post. ID: ${data.id}`
      );
      setLoaderDeleteMessage("");
      setLoaderSubmitMessage("");
    }
    setDeleting(false);
  };

  return (
    <div className="w-full h-[600px]">
      <h1
        className="text-center text-gray-600 text-3xl font-bold"
        id="pageHeader"
      >
        Update Post
      </h1>
      <PostForm
        mode={"update"}
        handleSubmitClick={handleSubmitClick}
        handleDeletePostClick={handleDeletePostClick}
        selectedPost={selectedPost}
        submitting={submitting}
        deleting={deleting}
        successMessage={successMessage}
        errorMessage={errorMessage}
        loaderSubmitMessage={loaderSubmitMessage}
        loaderDeleteMessage={loaderDeleteMessage}
      />
    </div>
  );
};
