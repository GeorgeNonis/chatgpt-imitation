import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  it("renders MeowGPT and version correctly", () => {
    render(<Header />);

    // Check if the text 'MeowGPT' is in the document
    const mainText = screen.getByText("MeowGPT");
    expect(mainText).toBeInTheDocument();

    // Check if the version '3.5' is in the document
    const versionText = screen.getByText("3.5");
    expect(versionText).toBeInTheDocument();
  });
});
