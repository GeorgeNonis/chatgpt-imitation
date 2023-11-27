import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserMessage from ".";

describe("UserMessage", () => {
  const text = "Hello";
  it("Renders the ReactNode successfully", () => {
    render(<UserMessage>{text}</UserMessage>);

    // Check if text is rendered
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
