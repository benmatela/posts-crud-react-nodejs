import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/posts/Header";

afterEach(cleanup);

describe("Test Header component", () => {
  it("should render", () => {
    const component = render(<BrowserRouter><Header /></BrowserRouter>);

    expect(component).toMatchSnapshot();
    
    expect(document.getElementsByClassName("link")).toHaveLength(2);
  });
});
