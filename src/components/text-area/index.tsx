import { StyledTextArea, StyledWarning } from "./text-area.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Proposals } from "..";

const TextArea = () => {
  return (
    <div>
      <Proposals />
      <StyledTextArea>
        <input type="text" maxLength={150} />
        <button>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </StyledTextArea>
      <StyledWarning>
        ChatGPT can make mistakes. Consider checking important information.
      </StyledWarning>
    </div>
  );
};
export default TextArea;
