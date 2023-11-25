import { Message } from "..";
import { useAppContext } from "../../../context/app";
import { StyledConversation } from "./conversation.styles";

const Conversation = () => {
  const { conversation } = useAppContext();
  const conv = conversation.map((inf, i) => {
    return <Message key={i} user={inf.from} message={inf.message} />;
  });
  return <StyledConversation>{conv}</StyledConversation>;
};
export default Conversation;
