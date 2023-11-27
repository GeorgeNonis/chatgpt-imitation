import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { STORE_CONVS } from "../../../config";
import StoredConversations from ".";

describe("StoredConversations", () => {
  it("renders the STORE_CONVS in the document", () => {
    render(<StoredConversations />);

    STORE_CONVS.forEach((conv) => {
      expect(screen.getByText(conv)).toBeInTheDocument();
    });
  });
});
