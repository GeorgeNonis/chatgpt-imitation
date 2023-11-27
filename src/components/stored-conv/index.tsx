import { StyledStoredConversation } from "./stored-conv.styles";
import { StoredConversationI } from "./stored-conv.types";

const StoredConversations = ({ children }: StoredConversationI) => {
  return <StyledStoredConversation>{children}</StyledStoredConversation>;
};
export default StoredConversations;
