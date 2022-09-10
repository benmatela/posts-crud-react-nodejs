import { cleanup, render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "../components/shared/PrimaryButton";

afterEach(cleanup);

const id = "testBtn";
const label = "Test";
const className = "text-white";

describe("Test PrimaryButton component", () => {
  it("should render", () => {
    const view = render(<PrimaryButton id={id} label={label} className={className} />);

    expect(view).toMatchSnapshot();

    expect(document.getElementById(id).innerHTML).toEqual(label);

    expect(document.getElementById(id).classList.contains(className));
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

    const button = document.getElementById(id);
    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
