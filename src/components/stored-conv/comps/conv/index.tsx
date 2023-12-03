import { StyledStoredConv } from "./conv.styles";
import { StoredConversationI } from "./conv.types";

const StoredConversation = ({
  children,
  selected,
  ...props
}: StoredConversationI) => {
  return (
    <StyledStoredConv selected={selected} {...props}>
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
