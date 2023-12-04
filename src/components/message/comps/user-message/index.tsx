import { StyledUserMessage } from "./user-message.styles";
import { UserMessageI } from "./user-message.types";

const UserMessage = ({ children, ...props }: UserMessageI) => {
  return <StyledUserMessage {...props}>{children}</StyledUserMessage>;
};
export default UserMessage;
