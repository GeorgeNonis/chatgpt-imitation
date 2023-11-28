import { Message } from "..";
import { StyledConversation } from "./conversation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useConversation } from "./useConversation";
import { ConversationIn } from "./conversation.types";

const Conversation = ({ conversation, typing }: ConversationIn) => {
  const { showScrollDownArrow, containerRef, scrollToBottom } =
    useConversation();

  const conv = conversation.messages.map((inf, i) => {
    const lastIndex = conversation.messages.length - 1;
    return (
      <Message
        {...inf}
        key={i}
        canCopy={
          conversation.messages[lastIndex].message === inf.message && typing
        }
      />
    );
  });
  return (
    <StyledConversation ref={containerRef}>
      {conv}
      <FontAwesomeIcon
        icon={faArrowCircleDown}
        data-testid="faArrowCircleDown"
        style={{
          position: "sticky",
          cursor: "pointer",
          width: "30px",
          height: "30px",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgb(87 87 87)",
          backgroundColor: "white",
          borderRadius: "50%",
          opacity: showScrollDownArrow ? 0.8 : 0,
        }}
        fill="red"
        onClick={scrollToBottom}
      />
    </StyledConversation>
  );
};
export default Conversation;
