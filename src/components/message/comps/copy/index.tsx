import { ToolTip } from "@/components";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyI } from "./copy.types";

const Copy = ({ onClick, ...props }: CopyI) => {
  return (
    <ToolTip tooltip="Copy" css={{ placeSelf: "flex-start" }} off={5}>
      <FontAwesomeIcon
        data-testid="copy-test"
        icon={faCopy}
        style={{
          color: "white",
          marginTop: 10,
          cursor: "pointer",
        }}
        onClick={onClick}
        {...props}
      />
    </ToolTip>
  );
};
export default Copy;
