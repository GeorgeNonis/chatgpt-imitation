import { renderHook, act } from "@testing-library/react-hooks";
import { useApp } from ".";

describe("AppHook", () => {
  it("initializes correctly", () => {
    const { result } = renderHook(() => useApp());

    expect(result.current.values.typing).toBe(false);
    expect(result.current.values.isLoading).toBe(false);
    expect(result.current.values.loading).toBe(false);
    expect(result.current.values.conversation).toEqual({
      id: "1995",
      conversation: [],
    });
  });

  it("change values", () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.handlers.setLoading(true);
      result.current.handlers.setTyping(true);
      result.current.handlers.setConversation({
        id: "100",
        conversation: [{ id: "2", from: "MeowGPT", message: "hey" }],
      });
    });

    expect(result.current.values.typing).toBe(true);
    expect(result.current.values.isLoading).toBe(true);
    expect(result.current.values.loading).toBe(true);
    expect(result.current.values.conversation).toEqual({
      id: "100",
      conversation: [{ id: "2", from: "MeowGPT", message: "hey" }],
    });
  });
});
