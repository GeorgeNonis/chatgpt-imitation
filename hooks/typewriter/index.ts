import { useEffect, useState } from "react";
import { UseTypewriterProps } from "./typewriter.types";
import { useAppContext } from "../../context";

const useTypewriter = ({
  message,
  isPrinted,
  typingSpeed = 40,
}: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const {
    typing,
    currentMessageID,
    setTyping,
    setConversation,
    setPrintedText,
  } = useAppContext();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (typing && text.length < message.length) {
      timeoutId = setTimeout(() => {
        setText(message.substring(0, text.length + 1));
      }, typingSpeed);
      setPrintedText(text);
    } else if (text.length === message.length && typing && !isPrinted) {
      setConversation((prevState) => {
        const updatedState = prevState.messages.map((msg) => {
          if (msg.id === currentMessageID) {
            return { ...msg, isPrinted: true };
          }
          return msg;
        });
        return { ...prevState, messages: [...updatedState] };
      });
      setTyping(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    text,
    typing,
    message,
    typingSpeed,
    setText,
    setTyping,
    setConversation,
    currentMessageID,
    isPrinted,
    setPrintedText,
  ]);

  return { text, typing };
};

export default useTypewriter;
