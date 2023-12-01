import { useEffect, useState } from "react";
import { UseTypewriterProps } from "./typewriter.types";
import { useAppContext } from "../../context";

const useTypewriter = ({ message, typingSpeed = 50 }: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const { typing, currentMessageID, setTyping, setConversation } =
    useAppContext();
  // console.log({ typing, message, text });
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    // console.log(text.length < message.length, text.length, message.length);
    // if (typing && text.length < message.length) {
    if (text.length < message.length) {
      timeoutId = setTimeout(() => {
        setText(message.substring(0, text.length + 1));
      }, typingSpeed);
      // console.log("if");
    }

    // else if (text.length === message.length) {
    //   console.log("if else");
    //   setConversation((prevState) => {
    //     const updatedState = prevState.messages.map((msg) => {
    //       if (msg.id === currentMessageID) {
    //         return { ...msg, isPrinted: true };
    //       }
    //       return msg;
    //     });
    //     return { ...prevState, messages: [...updatedState] };
    //   });
    //   setTyping(false);
    // }
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
  ]);

  return { text, typing };
};

export default useTypewriter;
