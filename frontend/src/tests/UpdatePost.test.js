import { cleanup, render, screen } from "@testing-library/react";
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

    const deleteBtn = screen.getByTestId("deleteBtn");
    expect(deleteBtn).toBeTruthy();

    const submitBtn = screen.getByTestId("submitBtn");
    expect(submitBtn).toBeTruthy();
  });
});
