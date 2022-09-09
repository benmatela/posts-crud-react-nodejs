import { cleanup, fireEvent, render } from "@testing-library/react";
import { Search } from "../components/shared/Search";

afterEach(cleanup);

describe("Test Search component", () => {
  it("Should render", () => {
    render(<Search searchPlaceholder={"Search Posts"} />);

    expect(document.getElementById("searchBar")).toBeTruthy();

    expect(document.getElementById("searchBar").placeholder).toEqual(
      "Search Posts"
    );
  });

  it("Should listen for search input", () => {
    const handleSearchClick = jest.fn();

    render(
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
