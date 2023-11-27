import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserMessage from ".";

describe("", () => {
  const text = "Hello";
  it("Renders the ReactNode successfully", () => {
    render(<UserMessage>{text}</UserMessage>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
