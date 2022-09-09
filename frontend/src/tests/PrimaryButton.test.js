import { cleanup, render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "../components/shared/PrimaryButton";

afterEach(cleanup);

describe("Test PrimaryButton component", () => {
  it("should render", () => {
    const id = "testBtn";
    const label = "Test";
    const className = "hover:bg-[#67ade3] bg-[#3120E0] mb-4 mt-2 h-10 w-80 rounded-md text-white";
    render(
      <PrimaryButton
        id={id}
        label={label}
        className={className}
      />
    );
    expect(document.getElementById("testBtn").innerHTML).toEqual("Test");
  });

  //   it("should click post item", () => {
  //     const handlePostItemClick = jest.fn();

  //     render(
  //       <PostItem posts={dummyPosts} handlePostItemClick={handlePostItemClick} />
  //     );

  //     const button = document.getElementById("1");
  //     fireEvent.click(button);

  //     expect(handlePostItemClick).toBeCalled();
  //   });
});
