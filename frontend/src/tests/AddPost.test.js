import { cleanup, render } from "@testing-library/react";
import { AddPost } from "../components/posts/AddPost";

afterEach(cleanup);

describe("Test AddPost component", () => {
  it("should render", () => {
    const component = render(<AddPost mode={"add"} />);

    expect(component).toMatchSnapshot();
  });
});
