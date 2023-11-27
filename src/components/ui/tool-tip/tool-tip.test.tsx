import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ToolTip from ".";

describe("ToolTip", () => {
  const tooltip = "Tool Tip";
  const hoverme = "Hover me";
  it("renders the text", () => {
    render(<ToolTip tooltip={tooltip}>{hoverme}</ToolTip>);

    expect(screen.getByText(hoverme)).toBeInTheDocument();
  });

  it("renders the tool tip", async () => {
    render(<ToolTip tooltip={tooltip}>{hoverme}</ToolTip>);

    userEvent.hover(screen.getByText(hoverme));
    await waitFor(() => screen.getByText(tooltip));
    expect(screen.getByText(tooltip)).toBeInTheDocument();
  });
});
