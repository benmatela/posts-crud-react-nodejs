import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostModel from "../components/posts/models/post.model";
import { PostForm } from "../components/posts/PostForm";

afterEach(cleanup);

describe("Test PostForm component", () => {
  it("Should render 'update' mode", () => {
    render(
      <PostForm
        mode={"update"}
        selectedPost={new PostModel(0, 0, "", "")}
        submitting={false}
        deleting={false}
        successMessage={""}
        errorMessage={""}
      />
    );

    expect(document.getElementById("titleLabel").innerHTML).toEqual("Title:");
    expect(document.getElementById("title").value).toEqual("");

    expect(document.getElementById("bodyLabel").innerHTML).toEqual("Body:");
    expect(document.getElementById("body").value).toEqual("");

    expect(document.getElementById("submitBtn")).toBeTruthy();
    expect(document.getElementById("submitBtn").innerHTML).toEqual("Submit");

    expect(document.getElementById("deleteBtn")).toBeTruthy();
    expect(document.getElementById("deleteBtn").innerHTML).toEqual("Delete");
  });

  it("Should render 'add' mode", () => {
    const handleSubmitClick = jest.fn();
    const handleDeletePostClick = jest.fn();

    render(
      <BrowserRouter>
        <PostForm
          mode={"add"}
          handleSubmitClick={handleSubmitClick}
          handleDeletePostClick={handleDeletePostClick}
          selectedPost={new PostModel(0, 0, "", "")}
          submitting={false}
          deleting={false}
          successMessage={""}
          errorMessage={""}
        />
      </BrowserRouter>
    );

    expect(document.getElementById("titleLabel").innerHTML).toEqual("Title:");
    expect(document.getElementById("title").value).toEqual("");

    expect(document.getElementById("bodyLabel").innerHTML).toEqual("Body:");
    expect(document.getElementById("body").value).toEqual("");

    expect(document.getElementById("submitBtn")).toBeTruthy();
    expect(document.getElementById("submitBtn").innerHTML).toEqual("Submit");

    expect(document.getElementById("deleteBtn")).not.toBeTruthy();
  });

  it("Should click 'submitBtn'", () => {
    // click submit button
    const handleSubmitClick = jest.fn();

    render(
      <PostForm
        mode={"update"}
        handleSubmitClick={handleSubmitClick}
        selectedPost={new PostModel(0, 0, "", "")}
        submitting={false}
        deleting={false}
        successMessage={""}
        errorMessage={""}
      />
    );

    const button = document.getElementById("submitBtn");
    fireEvent.click(button);

    expect(handleSubmitClick).toBeCalled();
  });

  it("Should click 'deleteBtn'", () => {
    const handleDeletePostClick = jest.fn();

    render(
      <PostForm
        mode={"update"}
        handleDeletePostClick={handleDeletePostClick}
        selectedPost={new PostModel(0, 0, "", "")}
        submitting={false}
        deleting={false}
        successMessage={""}
        errorMessage={""}
      />
    );

    const button = document.getElementById("deleteBtn");
    fireEvent.click(button);

    expect(handleDeletePostClick).toBeCalled();
  });
});
