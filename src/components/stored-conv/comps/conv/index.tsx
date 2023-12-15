import Icon from "@/components/ui/icon";
import { StyledStoredConv } from "./conv.styles";
import { StoredConversationI } from "./conv.types";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const StoredConversation = ({
  children,
  selected,
  ...props
}: StoredConversationI) => {
  return (
    <StyledStoredConv selected={selected} {...props}>
      <Icon
        icon={faEllipsis}
        style={{
          height: "15px",
          width: "15px",
          position: "absolute",
          right: "7px",
          transform: "translateY(50%)",
          top: 0,
        }}
      />
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
