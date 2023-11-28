import { useEffect, useRef, useState } from "react";

export const useConversation = () => {
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
    showScrollDownArrow,
    containerRef,
    scrollToBottom,
  };
};
