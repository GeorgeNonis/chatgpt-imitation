import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Idea from ".";

describe("Idea", () => {
  it("renders Title and Idea sucessfully", () => {
    const title = "Title";
    const idea = "Idea";
    render(<Idea idea={idea} title={title} data-testid="1995" />);

    // Expect Title to be rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    // Expect Idea to be rendered
    expect(screen.getByText(idea)).toBeInTheDocument();
  });
});
