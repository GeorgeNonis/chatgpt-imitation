import { STORE_CONVS } from "../../../config";
import StoredConversation from "./comps/conv";
import { StyledStoredConversation } from "./stored-conv.styles";

const StoredConversations = () => {
  return (
    <StyledStoredConversation>
      {STORE_CONVS.map((conv, i) => {
        return <StoredConversation key={i}>{conv}</StoredConversation>;
      })}
    </StyledStoredConversation>
  );
};
export default StoredConversations;
