import { cleanup, render } from "@testing-library/react";
import { Posts } from "../components/posts/Posts";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Test Posts component", () => {
  it("should render", async () => {
    const component = render(
      <BrowserRouter>
        <Posts />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
