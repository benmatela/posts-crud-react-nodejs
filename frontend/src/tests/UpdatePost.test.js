import { cleanup, fireEvent, render } from "@testing-library/react";
import { UpdatePost } from "../components/posts/UpdatePost";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Test UpdatePost component", () => {
  it("should render", () => {
    const view = render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    expect(view).toMatchSnapshot();

    const deleteBtn = document.getElementById("deleteBtn");
    expect(deleteBtn).toBeTruthy();

    const submitBtn = document.getElementById("submitBtn");
    expect(submitBtn).toBeTruthy();
  });
});
