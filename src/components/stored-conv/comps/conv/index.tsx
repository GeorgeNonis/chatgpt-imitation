import { StyledStoredConv } from "./conv.styles";
import { useAppContext } from "../../../../../context/app";
import { StoredConversationI } from "./conv.types";

const StoredConversation = ({ children, id }: StoredConversationI) => {
  const { selectConversation, currentConv, loading, typing } = useAppContext();
  const clickHandler = () => {
    if (loading || typing) return;
    selectConversation({ id });
  };
  return (
    <StyledStoredConv
      onClick={clickHandler}
      selected={id === currentConv}
      loading={loading || typing}
    >
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
