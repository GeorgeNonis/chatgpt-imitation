import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StoredConversation from ".";

describe("StoredConversation", () => {
  it("renders the text that is being passed", () => {
    const text = "Text";

    render(<StoredConversation>{text}</StoredConversation>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
