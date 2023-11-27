import { ReactNode } from "react";
import { StyledStoredConv } from "./conv.styles";
import { useAppContext } from "../../../../../context/app";

export interface StoredConversationI {
  children: ReactNode;
  id: string;
}

const StoredConversation = ({ children, id }: StoredConversationI) => {
  const { selectConversation, currentConv } = useAppContext();
  return (
    <StyledStoredConv
      onClick={() => selectConversation({ id })}
      selected={id === currentConv}
    >
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
