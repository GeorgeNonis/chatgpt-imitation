import { useAppContext } from "../../../context";
import StoredConversation from "./comps/conv";
import { StyledStoredConversation } from "./stored-conv.styles";

const StoredConversations = () => {
  const { chatLog } = useAppContext();
  return (
    <StyledStoredConversation>
      {chatLog.map((conv, i) => {
        return <StoredConversation key={i}>{conv.id}</StoredConversation>;
      })}
    </StyledStoredConversation>
  );
};
export default StoredConversations;
