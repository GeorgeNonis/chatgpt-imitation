import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { StyledArrowContainer } from "./arrow-up.styles";

const ArrowUp = () => {
  return (
    <StyledArrowContainer>
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{
          background: "#343541",
          color: "white",
          padding: "4px",
          borderRadius: "4px",
          width: "13px",
          height: "13px",
        }}
      />
    </StyledArrowContainer>
  );
};
export default ArrowUp;
