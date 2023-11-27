import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextArea from ".";

describe("TextArea", () => {
  it("Does alot of stuff lol", () => {
    const mockSendQuestionHandler = jest.fn();
    const isLoading = true;

    const arrowId = "onclick";

    render(
      <TextArea
        sendQuestionHandler={mockSendQuestionHandler}
        isLoading={isLoading}
        data-testid={arrowId}
      />
    );

    const arrow = screen.getByTestId(arrowId);

    fireEvent.click(arrow);
  });
});
