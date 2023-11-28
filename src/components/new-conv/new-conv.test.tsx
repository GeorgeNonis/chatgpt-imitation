import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewConversation from ".";

describe("NewConv", () => {
  it("Renders MeowGPT title,the icon and the picture", async () => {
    render(<NewConversation />);

    // Check if image is rendered
    await waitFor(() => {
      const image = screen.getByAltText("MeowGPT");
      expect(image).toHaveAttribute(
        "src",
        expect.stringContaining("/_next/image?url=%2Fcat.png&w=64&q=75")
      );
    });

    // Check if text is rendered
    expect(screen.getByAltText("MeowGPT")).toBeInTheDocument();

    // Check if icon is rendered
    const icon = screen.getByTestId("faPenToSquare");
    expect(icon).toBeInTheDocument();
  });
});
