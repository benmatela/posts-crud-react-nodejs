import React, { useState } from "react";
import PostModel from "./models/post.model";
import { PostForm } from "./PostForm";
import { addPost } from "../../services/post";

export const AddPost = () => {
  const [selectedPost] = useState({ selected: new PostModel(0, 0, "", "") });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const loaderSubmitMessage = "Adding new item...";

  /**
   * Handle PostForm 'submit' event and return data
   * @param {*} data
   */
  const handleSubmitClick = async (data) => {
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");
    const newPost = await addPost(data);
    if (newPost.status === 200) {
      setSuccessMessage(`Post Created with ID: ${newPost.data.id}.`);
    } else {
      setErrorMessage("Error while creating a post.");
    }
    setSubmitting(false);
  };

  return (
    <div className="w-full h-[600px]">
      <h1
        data-testid={"pageHeader"}
        className="text-center text-gray-600 text-3xl font-bold"
        id="pageHeader"
      >
        Add Post
      </h1>
      <PostForm
        mode={"add"}
        handleSubmitClick={handleSubmitClick}
        submitting={submitting}
        selectedPost={selectedPost}
        successMessage={successMessage}
        errorMessage={errorMessage}
        loaderSubmitMessage={loaderSubmitMessage}
      />
    </div>
  );
};
