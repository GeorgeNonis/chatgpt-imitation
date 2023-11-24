import { StyledTextArea } from "./text-area.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StyledWarning } from "../intro/intro.styles";

const TextArea = () => {
  return (
    <div>
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
