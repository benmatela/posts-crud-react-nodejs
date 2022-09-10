import { cleanup, fireEvent, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

afterEach(cleanup);

const mode = "add";

describe("Test AddPost component", () => {
  it("should render", () => {
    const component = render(<AddPost mode={mode} />);

    expect(component).toMatchSnapshot();

    const deleteBtn = document.getElementById("deleteBtn");
    expect(deleteBtn).not.toBeTruthy();

    const submitBtn = document.getElementById("submitBtn");
    expect(submitBtn).toBeTruthy();
  });

  it("should click 'submitBtn'", () => {
    let clicked = false;
    render(<AddPost mode={mode} />);

    const button = document.getElementById("submitBtn");
    button.addEventListener("click", () => {
      clicked = true;
    });
    fireEvent.click(button);

    expect(clicked).toEqual(true);
  });
});
