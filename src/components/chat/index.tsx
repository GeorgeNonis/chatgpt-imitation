"use client";

import Typewriter from "typewriter-effect";
import {
  StyledChat,
  StyledChatWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTypeWriterWrapper,
} from "./chat.styles";
import { useAppContext } from "../../../context/app";
import { User } from "..";
import { ChatI } from "./chat.types";

const Message = ({ user, ...props }: ChatI) => {
  const { response, typewriterRef, setTyping } = useAppContext();

  return (
    <StyledChatWrapper>
      <StyledChat>
        <User {...props} />
        <StyledTextWrapper>
          <StyledText>{user}</StyledText>
          <StyledTypeWriterWrapper>
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
                delay: 0.01,
              }}
            />
          </StyledTypeWriterWrapper>
        </StyledTextWrapper>
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Message;
