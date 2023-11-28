import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import User from ".";

describe("User", () => {
  //   it('renders the correct image for "You"', () => {
  //     render(<User user="You" alt="user image" />);

  //     const image = screen.getByAltText("user image");
  //     expect(image).toBeInTheDocument();
  //     expect(image).toHaveAttribute(
  //       "src",
  //       "/_next/image?url=%2Fme.jpg&w=96&q=75"
  //     );
  //   });

  it("renders the image with correct width and height", () => {
    const width = 60;
    const height = 60;
    render(<User user="You" width={width} height={height} alt="user image" />);

    const image = screen.getByAltText("user image");
    expect(image).toHaveAttribute("width", width.toString());
    expect(image).toHaveAttribute("height", height.toString());
  });
});
