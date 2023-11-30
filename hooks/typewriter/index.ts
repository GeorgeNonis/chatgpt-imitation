import { useEffect } from "react";
import { UseTypewriterProps } from "./typewriter.types";
import { useAppContext } from "../../context";

const useTypewriter = ({ message, typingSpeed = 100 }: UseTypewriterProps) => {
  const {
    typing,
    setPrintedText: setText,
    printedText: text,
    setTyping,
  } = useAppContext();
  console.log({ typing });
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
  }, [text, typing, message, typingSpeed, setText, setTyping]);

  return { text, typing };
};

export default useTypewriter;
