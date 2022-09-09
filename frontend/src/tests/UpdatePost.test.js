import { cleanup, render } from "@testing-library/react";
import { UpdatePost } from "../components/posts/UpdatePost";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Test AddPost component", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    expect(document.getElementById("pageHeader").innerHTML).toEqual(
      "Update Post"
    );

    expect(document.getElementById("title").value).toEqual("");

    expect(document.getElementById("body").value).toEqual("");

    expect(document.getElementById("submitBtn").innerHTML).toEqual("Submit");

    expect(document.getElementById("deleteBtn").innerHTML).toEqual("Delete");
  });
});
