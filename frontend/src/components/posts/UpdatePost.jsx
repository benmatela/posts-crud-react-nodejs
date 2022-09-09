import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostModel from "./models/post.model";
import { deletePostById, updatePost } from "../../services/post";
import { PostForm } from "./PostForm";

export const UpdatePost = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPost] = useState({
    selected: new PostModel(
      state?.selected.userId || 0,
      state?.selected.id || 0,
      state?.selected.title || "",
      state?.selected.body || ""
    ),
  });

  /**
   * Handle PostForm 'submit' and return data
   * @param {*} data
   */
  const handleSubmitClick = async (data) => {
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    const updated = await updatePost(data);
    if (updated.status === 200) {
      setSuccessMessage(`Post updated.`);
    } else {
      setErrorMessage("Error while updating a post.");
    }
    setSubmitting(false);
  };

  /**
   * Handle PostForm 'delete' and return data
   * @param {*} data
   */
  const handleDeletePostClick = async (data) => {
    setDeleting(true);
    setSuccessMessage("");
    setErrorMessage("");
    await deletePostById(data.id);
    setDeleting(false);
    navigate("/posts");
  };

  return (
    <div className="w-full bg-white h-[600px]">
      <h1 className="text-center text-3xl font-bold" id="pageHeader">
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
      />
    </div>
  );
};
