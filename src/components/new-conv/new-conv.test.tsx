import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewConversation from ".";

describe("NewConv", () => {
  it("Renders MeowGPT title,the icon and the picture", () => {
    render(<NewConversation />);

    // Check if image is rendered
    const image = screen.getByAltText("MeowGPT");
    expect(image).toBeInTheDocument();

    // Check if text is rendered
    expect(screen.getByAltText("MeowGPT")).toBeInTheDocument();

    // Check if icon is rendered
    const icon = screen.getByTestId("faPenToSquare");
    expect(icon).toBeInTheDocument();
  });
});
