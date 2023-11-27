import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, ToolTip } from "..";
import { useTextArea } from "./useTextArea";

const TextArea = () => {
  const { textAreaHandler, submitHandler, setValue, valid, isLoading, value } =
    useTextArea();
  return (
    <>
      <StyledTextArea>
        <StyledInput
          value={value}
          onKeyDown={(e) => {
            if (isLoading) return;
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
        <ToolTip off={10} tooltip="Send Message">
          <ArrowUp
            onClick={!isLoading ? submitHandler : () => null}
            theme="white"
            css={{ height: 20, width: 20 }}
            isValid={valid && !isLoading}
          />
        </ToolTip>
      </StyledTextArea>
      <StyledWarning>
        MeowGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </>
  );
};
export default TextArea;
