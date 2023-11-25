import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, PauseButton, ToolTip } from "..";
import { useTextArea } from "./useTextArea";

const TextArea = () => {
  const {
    textAreaHandler,
    submitHandler,
    stopTyping,
    setValue,
    valid,
    typing,
    value,
  } = useTextArea();
  return (
    <>
      <StyledTextArea>
        <StyledInput
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submitHandler();
              setValue("");
            }
          }}
          rows={1}
          tabIndex={0}
          maxLength={350}
          placeholder="Message me 😶‍🌫️..."
          onChange={textAreaHandler}
        />
        <ToolTip
          off={10}
          tooltip="Send Message"
          css={{ display: "grid", placeContent: "center" }}
        >
          {!typing ? (
            <ArrowUp
              onClick={submitHandler}
              theme="white"
              css={{ height: 20, width: 20 }}
              isValid={valid}
            />
          ) : (
            <PauseButton onClick={stopTyping} />
          )}
        </ToolTip>
      </StyledTextArea>
      <StyledWarning>
        MeowGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </>
  );
};
export default TextArea;
