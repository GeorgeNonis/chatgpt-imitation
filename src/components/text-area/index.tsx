import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, Proposals, ToolTip } from "..";
import { useTextArea } from "./useTextArea";

const TextArea = () => {
  const { textAreaHandler, valid, submitHandler } = useTextArea();
  return (
    <>
      <Proposals />
      <StyledTextArea>
        <StyledInput
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
          <ArrowUp
            onClick={submitHandler}
            theme="white"
            css={{ height: 20, width: 20 }}
            isValid={valid}
          />
        </ToolTip>
      </StyledTextArea>
      <StyledWarning>
        ChatGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </>
  );
};
export default TextArea;
