import { faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PauseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <FontAwesomeIcon
      icon={faStopCircle}
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "4px",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        color: "white",
        background: "#343541",
        display: "grid",
        placeSelf: "center",
      }}
    />
  );
};
export default PauseButton;
