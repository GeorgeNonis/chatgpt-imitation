import { ToolTip } from "@/components";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Copy = ({ onClick }: { onClick: () => void }) => {
  return (
    <ToolTip tooltip="Copy" css={{ placeSelf: "flex-start" }} off={5}>
      <FontAwesomeIcon
        icon={faCopy}
        style={{
          color: "white",
          marginTop: 10,
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    </ToolTip>
  );
};
export default Copy;
