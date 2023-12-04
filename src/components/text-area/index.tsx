import { StyledInput, StyledTextArea, StyledWarning } from "./text-area.styles";
import { ArrowUp, ToolTip } from "..";
import { useTextArea } from "./useTextArea";
import { TextAreaI } from "./text-area.types";
import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import Icon from "../ui/icon";

const TextArea = ({ "data-testid": datatestid, ...props }: TextAreaI) => {
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
  const iconStyle = { height: 20, width: 20, padding: 4 };
  return (
    <>
      <StyledTextArea {...props}>
        <StyledInput
          data-testid="text-area"
          value={value}
          onKeyDown={(e: React.KeyboardEvent) => {
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
          <ToolTip tooltip="Stop" off={10}>
            <Icon
              icon={faStopCircle}
              onClick={stopTypingHandler}
              style={{
                display: "grid",
                placeSelf: "center",
                cursor: "pointer",
                color: "black",
              }}
            />
          </ToolTip>
        ) : (
          <ToolTip off={10} tooltip="Send Message">
            <ArrowUp
              onClick={!isLoading ? onSumbitHandler : () => null}
              theme="white"
              css={iconStyle}
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
