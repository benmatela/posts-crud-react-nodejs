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

    expect(document.getElementById("pageHeader").innerHTML).toEqual("Update Post"); 

    const deleteBtn = document.getElementById("deleteBtn");
    expect(deleteBtn).toBeTruthy();

    const submitBtn = document.getElementById("submitBtn");
    expect(submitBtn).toBeTruthy();
  });
});
