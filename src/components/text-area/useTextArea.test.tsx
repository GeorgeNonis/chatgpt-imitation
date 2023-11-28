import { renderHook, act } from "@testing-library/react-hooks";
import { useTextArea } from "./useTextArea";
import { ChangeEvent } from "react";

describe("useTextArea", () => {
  it("initializes correctly", () => {
    const mockSendQuestionHandler = jest.fn();
    const { result } = renderHook(() =>
      useTextArea({ sendQuestionHandler: mockSendQuestionHandler })
    );

    expect(result.current.value).toBe("");
    expect(result.current.valid).toBe(false);
  });

  it("updates value and valid state on change", () => {
    const mockSendQuestionHandler = jest.fn();
    const { result } = renderHook(() =>
      useTextArea({ sendQuestionHandler: mockSendQuestionHandler })
    );

    act(() => {
      result.current.onChangeHandler({
        target: { value: "Test message" },
      } as ChangeEvent<HTMLTextAreaElement>);
    });

    expect(result.current.value).toBe("Test message");
    expect(result.current.valid).toBe(true);
  });

  it("handles submit correctly", async () => {
    const mockSendQuestionHandler = jest.fn();
    const { result } = renderHook(() =>
      useTextArea({ sendQuestionHandler: mockSendQuestionHandler })
    );

    await act(async () => {
      await result.current.onSumbitHandler();
    });
    expect(mockSendQuestionHandler).not.toHaveBeenCalled();

    act(() => {
      result.current.onChangeHandler({
        target: { value: "Test message" },
      } as ChangeEvent<HTMLTextAreaElement>);
    });
    await act(async () => {
      await result.current.onSumbitHandler();
    });
    expect(mockSendQuestionHandler).toHaveBeenCalledWith({
      value: "Test message",
    });
  });
});
