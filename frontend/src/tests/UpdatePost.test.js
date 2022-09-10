import { cleanup, fireEvent, render } from "@testing-library/react";
import { UpdatePost } from "../components/posts/UpdatePost";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

describe("Test UpdatePost component", () => {
  it("should render", () => {
    const component = render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();

    expect(document.getElementById("pageHeader").innerHTML).toEqual(
      "Update Post"
    );

    const deleteBtn = document.getElementById("deleteBtn");
    expect(deleteBtn).toBeTruthy();

    const submitBtn = document.getElementById("submitBtn");
    expect(submitBtn).toBeTruthy();
  });

  it("should click 'submitBtn'", () => {
    let clicked = false;

    render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    const button = document.getElementById("submitBtn");
    button.addEventListener("click", () => {
      clicked = true;
    });
    fireEvent.click(button);

    expect(clicked).toEqual(true);
  });

  it("should click 'deleteBtn'", () => {
    let clicked = false;

    const component = render(
      <BrowserRouter>
        <UpdatePost />
      </BrowserRouter>
    );

    const button = document.getElementById("deleteBtn");
    button.addEventListener("click", () => {
      clicked = true;
    });
    fireEvent.click(button);

    expect(clicked).toEqual(true);
  });
});
