import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../components/shared/Search";

afterEach(cleanup);

describe("Test Search component", () => {
  it("should render", () => {
    const view = render(<Search searchPlaceholder={"Search Posts"} />);

    expect(view).toMatchSnapshot(); 
  });

  it("should listen for search input", () => {
    const handleSearchClick = jest.fn();

    const view = render(
      <Search
        handleSearchClick={handleSearchClick}
        searchPlaceholder={"Search Posts"}
      />
    );

    const button = document.getElementById("searchBar");
    fireEvent.keyUp(button);

    expect(handleSearchClick).toBeCalled();
  });
});
