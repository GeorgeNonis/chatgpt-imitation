import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArrowUp from ".";

describe("ArrowUp", () => {
  it("renders with white theme and valid state", () => {
    const customStyle = { fontSize: "20px" };
    render(<ArrowUp theme="white" isValid={true} css={customStyle} />);

    const arrowIcon = screen.getByTestId("faArrowUp");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveStyle("color: black");
    expect(arrowIcon).toHaveStyle("background: white");
    expect(arrowIcon).toHaveStyle("fontSize: 20px");
  });

  it("renders with default theme and invalid state", () => {
    render(<ArrowUp isValid={false} />);

    const arrowIcon = screen.getByTestId("faArrowUp");
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveStyle("color: white");
    expect(arrowIcon).toHaveStyle("background: #343541");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<ArrowUp onClick={handleClick} />);

    const arrowIcon = screen.getByTestId("faArrowUp");
    fireEvent.click(arrowIcon);
    expect(handleClick).toHaveBeenCalled();
  });
});
