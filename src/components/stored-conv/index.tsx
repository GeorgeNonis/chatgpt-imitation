import { useAppContext } from "../../../context";
import { useNewConv } from "../../../hooks";
import StoredConversation from "./comps/conv";
import { StyledStoredConversation } from "./stored-conv.styles";

const StoredConversations = () => {
  const { chatLog } = useAppContext();
  const { newConversationHandler } = useNewConv();
  return (
    <StyledStoredConversation>
      {chatLog.map((conv, i) => {
        return (
          <StoredConversation key={i} onClick={newConversationHandler}>
            {conv.id}
          </StoredConversation>
        );
      })}
    </StyledStoredConversation>
  );
};
export default StoredConversations;
