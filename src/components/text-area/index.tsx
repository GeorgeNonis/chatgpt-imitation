import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, ToolTip } from "..";
import { useTextArea } from "./useTextArea";
import { TextAreaI } from "./text-area.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopCircle } from "@fortawesome/free-solid-svg-icons";

const TextArea = ({ "data-testid": datatestid }: TextAreaI) => {
  const {
    onSumbitHandler,
    onChangeHandler,
    stopTypingHandler,
    setValue,
    valid,
    value,
    isLoading,
    typing,
  } = useTextArea();
  return (
    <>
      <StyledTextArea>
        <StyledInput
          data-testid="text-area"
          value={value}
          onKeyDown={(e: KeyboardEvent) => {
            if (isLoading) return;
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSumbitHandler();
              setValue("");
            }
          }}
          rows={1}
          tabIndex={0}
          maxLength={350}
          placeholder="Message me 😶‍🌫️..."
          onChange={onChangeHandler}
        />
        {typing ? (
          <FontAwesomeIcon icon={faStopCircle} onClick={stopTypingHandler} />
        ) : (
          <ToolTip off={10} tooltip="Send Message">
            <ArrowUp
              onClick={!isLoading ? onSumbitHandler : () => null}
              theme="white"
              css={{ height: 20, width: 20 }}
              isValid={valid && !isLoading}
              data-testid={datatestid}
            />
          </ToolTip>
        )}
      </StyledTextArea>
      <StyledWarning>
        MeowGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </>
  );
};
export default TextArea;
