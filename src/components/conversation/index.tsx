import { Message } from "..";
import { StyledConversation } from "./conversation.styles";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useConversation } from "./useConversation";
import { ConversationIn } from "./conversation.types";
import Icon from "../ui/icon";

const Conversation = ({ conversation, typing }: ConversationIn) => {
  const { showScrollDownArrow, containerRef, scrollToBottom } =
    useConversation();

  const conv = conversation.messages.map((inf, i) => {
    const lastIndex = conversation.messages.length - 1;
    const latestMsg = conversation.messages[lastIndex].message === inf.message;
    return <Message {...inf} key={i} canCopy={latestMsg && typing} />;
  });

  return (
    <StyledConversation ref={containerRef}>
      {conv}
      <Icon
        icon={faArrowCircleDown}
        data-testid="faArrowCircleDown"
        style={{
          position: "sticky",
          cursor: "pointer",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgb(87 87 87)",
          backgroundColor: "white",
          borderRadius: "50%",
          opacity: showScrollDownArrow ? 0.8 : 0,
        }}
        onClick={scrollToBottom}
      />
    </StyledConversation>
  );
};
export default Conversation;
