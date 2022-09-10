import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostModel from "../components/posts/models/post.model";
import { PostForm } from "../components/posts/PostForm";

afterEach(cleanup);

describe("Test PostForm component", () => {
  it("should render 'update' view mode", () => {
    const view = render(
      <PostForm
        mode={"update"}
        selectedPost={new PostModel(0, 0, "", "")}
        submitting={false}
        deleting={false}
        successMessage={""}
        errorMessage={""}
      />
    );

    expect(view).toMatchSnapshot();

    expect(screen.getByTestId("deleteBtn").innerHTML).toEqual("Delete");

    expect(screen.getByTestId("submitBtn").innerHTML).toEqual("Submit");
  });

  it("should render 'add' view mode", () => {
    const handleSubmitClick = jest.fn();
    const handleDeletePostClick = jest.fn();

    const view = render(
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

    expect(view).toMatchSnapshot();
  });

  it("should click 'submitBtn'", () => {
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

    const button = screen.getByTestId("submitBtn");
    fireEvent.click(button);

    expect(handleSubmitClick).toBeCalled();
  });

  it("should click 'deleteBtn'", () => {
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

    const button = screen.getByTestId("deleteBtn");
    fireEvent.click(button);

    expect(handleDeletePostClick).toBeCalled();
  });
});
