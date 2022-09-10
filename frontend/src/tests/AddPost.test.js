import { cleanup, fireEvent, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

afterEach(cleanup);

const mode = "add";

describe("Test AddPost component", () => {
  it("should render", () => {
    const view = render(<AddPost mode={mode} />);

    expect(view).toMatchSnapshot();

    const deleteBtn = document.getElementById("deleteBtn");
    expect(deleteBtn).not.toBeTruthy();

    const submitBtn = document.getElementById("submitBtn");
    expect(submitBtn).toBeTruthy();
  });
});
