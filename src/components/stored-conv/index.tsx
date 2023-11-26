import { StyledStoredConversation } from "./stored-conv.styles";
import { StoredConversationI } from "./stored-conv.types";

const StoredConversation = ({ children }: StoredConversationI) => {
  return <StyledStoredConversation>{children}</StyledStoredConversation>;
};
export default StoredConversation;
