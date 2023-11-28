import { StyledStoredConv } from "./conv.styles";
import { StoredConversationI } from "./conv.types";

const StoredConversation = ({ children }: StoredConversationI) => {
  const random = Math.random() < 0.5;

  return <StyledStoredConv selected={random}>{children}</StyledStoredConv>;
};
export default StoredConversation;
