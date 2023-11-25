import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ArrowUpI } from "./arrow-up.types";

const ArrowUp = ({ theme = "dark", isValid, css, ...props }: ArrowUpI) => {
  if (theme === "white") {
    return (
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{
          cursor: "pointer",
          padding: "4px",
          borderRadius: "50%",
          width: "13px",
          height: "13px",
          color: isValid ? "black" : "rgb(52, 53, 65)",
          background: isValid ? "white" : "rgb(87 87 87 / 68%)",
          ...css,
        }}
        {...props}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{
          cursor: "pointer",
          padding: "4px",
          borderRadius: "50%",
          width: "13px",
          height: "13px",
          color: "white",
          background: "#343541",
          ...css,
        }}
        {...props}
      />
    );
  }
};
export default ArrowUp;
