import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Copy from ".";

describe("Copy", () => {
  it("renders the copy icon and responds to click events", () => {
    const testId = "copy-test"; // Update this to match the data-testid in your component
    const mockOnClick = jest.fn();
    render(<Copy onClick={mockOnClick} />);

    // Check if the FontAwesome icon is rendered with the correct data-testid
    const icon = screen.getByTestId(testId);
    expect(icon).toBeInTheDocument();

    // Simulate a click event
    fireEvent.click(icon);

    // Check if the onClick function was called
    expect(mockOnClick).toHaveBeenCalled();
  });

  // Add additional tests if necessary
});
