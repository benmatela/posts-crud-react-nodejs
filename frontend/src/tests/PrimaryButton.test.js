import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { PrimaryButton } from "../components/shared/PrimaryButton";

afterEach(cleanup);

const testId = "testBtn";
const labelText = "Test";
const className = "text-white";

describe("Test PrimaryButton component", () => {
  it("should render", () => {
    const view = render(
      <PrimaryButton
        id={testId}
        label={labelText}
        disabled={false}
        className={className}
      />
    );

    expect(view).toMatchSnapshot();

    expect(screen.getByTestId(testId).innerHTML).toEqual(labelText);

    expect(
      screen.getByTestId(testId).classList.contains(className)
    ).toBeTruthy();
  });

  it("should click 'testBtn'", () => {
    const onClick = jest.fn();

    const view = render(
      <PrimaryButton
        id={testId}
        label={labelText}
        disabled={false}
        className={className}
        onClick={onClick}
      />
    );

    expect(view).toMatchSnapshot();

    const button = screen.getByTestId(testId);
    fireEvent.click(button);

    expect(onClick).toBeCalled();
  });
});
