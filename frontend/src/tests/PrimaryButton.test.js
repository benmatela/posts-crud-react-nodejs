import { cleanup, render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "../components/shared/PrimaryButton";

afterEach(cleanup);

const id = "testBtn";
const label = "Test";
const className = "text-white";

describe("Test PrimaryButton component", () => {
  it("should render", () => {
    const component = render(<PrimaryButton id={id} label={label} className={className} />);

    expect(component).toMatchSnapshot();

    expect(document.getElementById("testBtn").innerHTML).toEqual(label);

    expect(document.getElementById("testBtn").classList.contains("text-white"));
  });

  it("should click 'testBtn'", () => {
    const onClick = jest.fn();

    render(
      <PrimaryButton
        id={id}
        label={label}
        className={className}
        onClick={onClick}
      />
    );

    const button = document.getElementById("testBtn");
    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
