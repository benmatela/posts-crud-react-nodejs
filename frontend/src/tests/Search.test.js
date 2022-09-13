import { cleanup, fireEvent, render } from "@testing-library/react";
import { Search } from "../components/shared/Search";

afterEach(cleanup);

describe("Test Search component", () => {
  it("should render", () => {
    const view = render(<Search searchPlaceholder={"Search Posts"} />);

    expect(view).toMatchSnapshot(); 
  });

  it("should listen for search input", () => {
    const handleSearchKeyUp = jest.fn();

    render(
      <Search
        handleSearchKeyUp={handleSearchKeyUp}
        searchPlaceholder={"Search Posts"}
      />
    );

    const input = document.getElementById("searchBar");
    fireEvent.keyUp(input);

    expect(handleSearchKeyUp).toBeCalled();
  });
});
