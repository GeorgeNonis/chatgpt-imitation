import { StyledStoredConv } from "./conv.styles";
import { useAppContext } from "../../../../../context/app";
import { StoredConversationI } from "./conv.types";

const StoredConversation = ({ children, id }: StoredConversationI) => {
  const { selectConversation, currentConv, loading, typing } = useAppContext();

  return (
    <StyledStoredConv
      onClick={
        loading || typing ? () => null : () => selectConversation({ id })
      }
      selected={id === currentConv}
      loading={loading || typing}
    >
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
