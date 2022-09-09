import { cleanup, render } from "@testing-library/react";
import { Posts } from "../components/posts/Posts";
import { BrowserRouter } from "react-router-dom";
import enableHooks from "jest-react-hooks-shallow";

enableHooks(jest);

afterEach(cleanup);

describe("Test Posts component", () => {
  it("should render", async () => {
    render(
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    );

    expect(document.getElementById("pageHeader").innerHTML).toEqual("Posts (0)");

    expect(document.getElementById("loader").innerHTML).toEqual("Loading posts..");
  });

  // Test with loaded posts
});
