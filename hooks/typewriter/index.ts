import { useState, useEffect } from "react";
import { UseTypewriterProps } from "./typewriter.types";
import { useAppContext } from "../../context";

const useTypewriter = ({ message, typingSpeed = 100 }: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isTyping && text.length < message.length) {
      timeoutId = setTimeout(() => {
        setText(message.substring(0, text.length + 1));
      }, typingSpeed);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, isTyping, message, typingSpeed]);

  return { text, isTyping, setIsTyping };
};

export default useTypewriter;
