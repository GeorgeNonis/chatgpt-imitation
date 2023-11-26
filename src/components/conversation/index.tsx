import { useEffect, useRef, useState } from "react";
import { Message } from "..";
import { useAppContext } from "../../../context/app";
import { StyledConversation } from "./conversation.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const Conversation = () => {
  const { conversation } = useAppContext();
  const conv = conversation.map((inf, i) => {
    return <Message key={i} user={inf.from} message={inf.message} />;
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollDownArrow, setShowScrollDownArrow] = useState(false);

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    const isScrolledToBottom =
      container.scrollHeight - container.scrollTop === container.clientHeight;
    setShowScrollDownArrow(!isScrolledToBottom);
  };

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [containerRef.current?.clientHeight]);

  return (
    <StyledConversation ref={containerRef}>
      {conv}
      {/* {showScrollDownArrow && (
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
            opacity: 0.8,
          }}
          fill="red"
          onClick={scrollToBottom}
        />
      )} */}
    </StyledConversation>
  );
};
export default Conversation;
