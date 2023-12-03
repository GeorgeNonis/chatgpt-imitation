import { useAppContext } from "../../../context";
import { useSelectConv } from "../../../hooks";
import StoredConversation from "./comps/conv";
import { StyledStoredConversation } from "./stored-conv.styles";

const StoredConversations = () => {
  const { chatLog, conversation } = useAppContext();
  const { selectConversationHandler } = useSelectConv();
  return (
    <StyledStoredConversation>
      {chatLog.map((conv, i) => {
        const selected = conv.id === conversation.id;
        return (
          <StoredConversation
            selected={selected}
            key={i}
            onClick={() => selectConversationHandler(conv.id)}
          >
            {conv.id}
          </StoredConversation>
        );
      })}
    </StyledStoredConversation>
  );
};
export default StoredConversations;
