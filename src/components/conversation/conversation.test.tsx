import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Conversation from ".";

describe("Conversation", () => {
  it("", () => {
    render(
      <Conversation
        typing={false}
        conversation={{ id: "10", conversation: [] }}
      />
    );

    const icon = screen.getByTestId("faArrowCircleDown");

    expect(icon).toBeInTheDocument();
  });
});
