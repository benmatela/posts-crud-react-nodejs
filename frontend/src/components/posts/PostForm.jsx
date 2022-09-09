import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./PostForm.css";
import PostModel from "./models/post.model";

export const PostForm = (props) => {
  const [isUpdate] = useState(props.mode === "update" ? true : false);
  const [selectedPost, setSelectedPost] = useState(props.selectedPost.selected);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    props.handleSubmitClick(selectedPost);
  };

  const handleDeletePostClick = async (event) => {
    // 'Yes/No' confirmation before 'handleDeletePostClick' is fired
    event.preventDefault();
    props.handleDeletePostClick(selectedPost);
  };

  const handleTitleInpuChange = async (event) => {
    const post = new PostModel(
      selectedPost.userId,
      selectedPost.id,
      event.target.value,
      selectedPost.body
    );
    setSelectedPost(post);
  };

  const handleBodyInputChange = async (event) => {
    const post = new PostModel(
      selectedPost.userId,
      selectedPost.id,
      selectedPost.title,
      event.target.value
    );
    setSelectedPost(post);
  };

  return (
    <form
      id={props.mode + "Form"}
      name={props.mode + "Form"}
      className="bg-white h-min mt-10"
    >
      <div className="text-center">
        <br />
        {/*  FORM FIELDS */}
        <InputLabel id="titleLabel" className="m-2">
          Title:
        </InputLabel>
        <Input
          id="title"
          className="form-input w-[100%] md:w-[50%]"
          defaultValue={selectedPost?.title}
          {...register("title", { required: true })}
          onChange={handleTitleInpuChange}
        />
        <br />
        <small className="text-[#d9534f]">
          {errors.title && <span>Title is required</span>}
        </small>
        <InputLabel id="bodyLabel" className="mt-4 mb-2">
          Body:
        </InputLabel>
        <TextareaAutosize
          id="body"
          className="form-input w-[100%] md:w-[50%]"
          defaultValue={selectedPost?.body}
          label={"Body"}
          {...register("body", { required: true })}
          minRows={5}
          onChange={handleBodyInputChange}
        />
        <br />
        <small className="text-[#d9534f]">
          {errors.body && <span>Body is required</span>}
        </small>
        <br />

        {/*  BUTTONS */}
        {props.submitting ? (
          <h1 className="text-center text-[#28a745] font-bold">Saving...</h1>
        ) : (
          <div>
            <button
              id="submitBtn"
              className="hover:bg-[#67ade3] bg-[#3120E0] mb-4 mt-2 h-10 w-80 rounded-md text-white"
              onClick={(event) => handleSubmit(handleSubmitClick(event))}
              disabled={props.deleting}
            >
              Submit
            </button>
            <br />
          </div>
        )}
        {isUpdate ? (
          !props.deleting ? (
            <button
              id="deleteBtn"
              className="hover:bg-[#e08683] bg-[#d9534f] mb-4 mt-2 h-10 w-80 rounded-md text-white"
              onClick={(event) => handleDeletePostClick(event)}
              disabled={props.submitting}
            >
              Delete
            </button>
          ) : (
            <h1 className="text-center text-[#d9534f] font-bold">
              Deleting...
            </h1>
          )
        ) : null}

        {/*  ERROR MESSAGES */}
        {props.successMessage.length > 0 ? (
          <h1 className="text-center text-[#28a745] font-bold">
            {props.successMessage}
          </h1>
        ) : null}
        {props.errorMessage.length > 0 ? (
          <h1 className="text-center text-[#dc3545] font-bold">
            {props.errorMessage}
          </h1>
        ) : null}
      </div>
    </form>
  );
};
