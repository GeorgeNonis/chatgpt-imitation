import { ReactNode } from "react";
import { StyledShadow, StyledStoredConv } from "./conv.styles";

const StoredConversation = ({ children }: { children: ReactNode }) => {
  return (
    <StyledStoredConv>
      {/* <StyledShadow /> */}
      {children}
    </StyledStoredConv>
  );
};
export default StoredConversation;
