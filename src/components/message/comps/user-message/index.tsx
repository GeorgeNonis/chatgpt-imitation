import { ReactNode } from "react";
import { StyledUserMessage } from "./user-message.styles";

const UserMessage = ({ children }: { children: ReactNode }) => {
  return <StyledUserMessage>{children}</StyledUserMessage>;
};
export default UserMessage;
