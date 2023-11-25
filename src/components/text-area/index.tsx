import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, PauseButton, ToolTip } from "..";
import { useTextArea } from "./useTextArea";

const TextArea = () => {
  const { textAreaHandler, submitHandler, stopTyping, valid, typing } =
    useTextArea();
  return (
    <>
      <StyledTextArea>
        <StyledInput
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitHandler();
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
        ChatGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </>
  );
};
export default TextArea;
