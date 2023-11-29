import { useState, useEffect } from "react";
import { UseTypewriterProps } from "./typewriter.types";

const useTypewriter = ({ fullText, typingSpeed = 100 }: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isTyping && text.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, isTyping, fullText, typingSpeed]);

  return { text, isTyping, setIsTyping };
};

export default useTypewriter;
