import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Intro from ".";

describe("Intro", () => {
  it("renders an image and a title", () => {
    render(<Intro />);

    // Check if the image is rendered
    const image = screen.getByRole("img", { name: /chat gpt/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveStyle("borderRadius: 50%");

    // Check if the title is rendered
    const title = screen.getByText("How can I help you today?");
    expect(title).toBeInTheDocument();
  });
});
