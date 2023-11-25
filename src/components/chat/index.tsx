"use client";

import Typewriter from "typewriter-effect";
import { StyledChat, StyledChatWrapper } from "./chat.styles";
import { useAppContext } from "../../../context/app";

const Chat = () => {
  const { response, typewriterRef, setTyping } = useAppContext();

  return (
    <StyledChatWrapper>
      <StyledChat>
        <Typewriter
          onInit={(typewriter) => {
            typewriterRef.current = typewriter;
            setTyping(true);
            typewriter
              .typeString(response)
              .callFunction(() => {
                setTyping(false);
              })
              .start();
          }}
          options={{
            autoStart: true,
            loop: false,
            deleteSpeed: 0,
            cursor: "",
            delay: 0.5,
          }}
        />
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Chat;
