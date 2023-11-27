import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextArea from ".";

describe("TextArea", () => {
  it("Expect Textarea to be rendered", () => {
    const mockSendQuestionHandler = jest.fn();
    const isLoading = false;

    render(
      <TextArea
        sendQuestionHandler={mockSendQuestionHandler}
        isLoading={isLoading}
      />
    );
    const textarea = screen.getByTestId("text-area");
    expect(textarea).toBeInTheDocument();
  });

  it("Expect sendQuestionHandler to be called once", () => {
    const mockSendQuestionHandler = jest.fn();
    const isLoading = false;

    render(
      <TextArea
        sendQuestionHandler={mockSendQuestionHandler}
        isLoading={isLoading}
      />
    );
    const textarea = screen.getByTestId("text-area");
    fireEvent.change(textarea, { target: { value: "Test message" } });
    fireEvent.keyDown(textarea, { key: "Enter", shiftKey: false });

    expect(mockSendQuestionHandler).toHaveBeenCalled();
  });
  it("Expect sendQuestionHandler to dont be called", () => {
    const mockSendQuestionHandler = jest.fn();
    const isLoading = true;

    render(
      <TextArea
        sendQuestionHandler={mockSendQuestionHandler}
        isLoading={isLoading}
      />
    );
    const textarea = screen.getByTestId("text-area");
    fireEvent.change(textarea, { target: { value: "Test message" } });
    fireEvent.keyDown(textarea, { key: "Enter", shiftKey: false });

    expect(mockSendQuestionHandler).not.toHaveBeenCalled();
  });
});
