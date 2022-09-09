import { cleanup, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

afterEach(cleanup);

describe("Test AddPost component", () => {
  it("should render", () => {
    render(
        <AddPost mode={"add"} />
    );

    expect(document.getElementById("pageHeader").innerHTML).toEqual("Add Post");

    expect(document.getElementById("titleLabel").innerHTML).toEqual("Title:");
    expect(document.getElementById("title").value).toEqual("");

    expect(document.getElementById("bodyLabel").innerHTML).toEqual("Body:");
    expect(document.getElementById("body").value).toEqual("");

    expect(document.getElementById("submitBtn")).toBeTruthy();
    expect(document.getElementById("submitBtn").innerHTML).toEqual("Submit");
  });

  it("should handle click 'submitBtn'", () => {
    // click submit button
  });
});
