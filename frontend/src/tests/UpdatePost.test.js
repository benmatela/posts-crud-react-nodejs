import { cleanup, render } from "@testing-library/react";
import { UpdatePost } from "../components/posts/UpdatePost";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Test AddPost component", () => {
  it("should render", () => {
    const component = render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it("should handle click 'submitBtn'", () => {
    // click submit button
  });

  it("should handle click 'deleteBtn'", () => {
    // click delete button
  });
});
