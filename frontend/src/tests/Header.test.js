import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/posts/Header";

afterEach(cleanup);

describe("Test Header component", () => {
  it("should render", async () => {
    const view = render(<BrowserRouter><Header /></BrowserRouter>);

    expect(view).toMatchSnapshot();
    const links = await (await screen.findAllByTestId("link")).length;
    expect(links).toEqual(2);
  });
});
