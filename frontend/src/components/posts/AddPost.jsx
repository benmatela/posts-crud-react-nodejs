import React, { useState } from "react";
import PostModel from "./models/post.model";
import { PostForm } from "./PostForm";
import { addPost } from "../../services/post";

export const AddPost = () => {
  const [selectedPost] = useState({ selected: new PostModel(0, 0, "", "") });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitClick = async (data) => {
    setSubmitting(true);
    const newPost = await addPost(data);
    console.log(newPost);
    if (newPost.status === 200) {
      setSuccessMessage(`Post Created with ID: ${newPost.data.id}.`);
    } else {
      setErrorMessage("Error while creating a post.");
    }
    setSubmitting(false);
  };

  return (
    <div className="w-full bg-white h-[600px]">
      <h1
        data-testid={"pageHeader"}
        className="text-center text-3xl font-bold"
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
      />
    </div>
  );
};
