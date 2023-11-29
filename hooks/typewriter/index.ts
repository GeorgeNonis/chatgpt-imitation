import { useState, useEffect } from "react";
import { UseTypewriterProps } from "./typewriter.types";
import { useAppContext } from "../../context";

const useTypewriter = ({ message, typingSpeed = 100 }: UseTypewriterProps) => {
  const { typing } = useAppContext();
  const [text, setText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (typing && text.length < message.length) {
      timeoutId = setTimeout(() => {
        setText(message.substring(0, text.length + 1));
      }, typingSpeed);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, typing, message, typingSpeed]);

  return { text, typing };
};

export default useTypewriter;
