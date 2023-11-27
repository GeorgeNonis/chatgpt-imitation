import { Message } from "..";
import { StyledConversation } from "./conversation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useConversation } from "./useConversation";

const Conversation = () => {
  const {
    conversation,
    showScrollDownArrow,
    containerRef,
    typing,
    scrollToBottom,
  } = useConversation();

  console.log({ conversation });
  const conv = conversation.conversation.map((inf, i) => {
    const lastIndex = conversation.conversation.length - 1;
    return (
      <Message
        key={i}
        user={inf.from}
        message={inf.message}
        canCopy={
          conversation.conversation[lastIndex].message === inf.message && typing
        }
      />
    );
  });
  return (
    <StyledConversation ref={containerRef}>
      {conv}
      <FontAwesomeIcon
        icon={faArrowCircleDown}
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
