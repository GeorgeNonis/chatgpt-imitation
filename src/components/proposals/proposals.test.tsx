import { render, screen } from "@testing-library/react";
import Proposals from ".";
import { IDEAS } from "../../../config";

describe("Proposals", () => {
  it("renders the proposals", () => {
    render(<Proposals />);

    IDEAS.slice(0, 4).forEach((i) => {
      expect(screen.getByText(i.idea)).toBeInTheDocument();
    });
  });
});
