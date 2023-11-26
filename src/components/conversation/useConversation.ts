import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../../context/app";

export const useConversation = () => {
  const { conversation, typing } = useAppContext();

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
      container?.addEventListener("scroll", () => {
        const isScrolledToBottom =
          container.scrollHeight - container.scrollTop ===
          container.clientHeight;
        setShowScrollDownArrow(!isScrolledToBottom);
      });
      const resizeObserver = new ResizeObserver(() => {
        checkScrollPosition();
      });

      resizeObserver.observe(container);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return {
    conversation,
    showScrollDownArrow,
    containerRef,
    typing,
    scrollToBottom,
  };
};
