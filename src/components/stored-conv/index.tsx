import { useAppContext } from "../../../context/app";
import StoredConversation from "./comps/conv";
import { StyledStoredConversation } from "./stored-conv.styles";

const StoredConversations = () => {
  const { storedConvs } = useAppContext();

  return (
    <StyledStoredConversation>
      {storedConvs.length > 0 &&
        storedConvs.map((conv, i) => {
          return <StoredConversation key={i}>{conv.id}</StoredConversation>;
        })}
    </StyledStoredConversation>
  );
};
export default StoredConversations;
