import { cleanup, screen, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

afterEach(cleanup);

const mode = "add";

describe("Test AddPost component", () => {
  it("should render", () => {
    const view = render(<AddPost mode={mode} />);

    expect(view).toMatchSnapshot();

    const submitBtn = screen.getByTestId("submitBtn");
    expect(submitBtn).toBeTruthy();
  });
});
