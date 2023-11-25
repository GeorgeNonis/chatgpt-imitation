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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "./useChat";

const Message = ({ user, message, ...props }: ChatI) => {
  const { copyToClipboard, setTyping, typewriterRef } = useChat({ message });

  return (
    <StyledChatWrapper>
      <StyledChat>
        <User user={user} {...props} />
        <StyledTextWrapper>
          <StyledText>{user}</StyledText>
          <StyledTypeWriterWrapper>
            <Typewriter
              onInit={(typewriter) => {
                typewriterRef.current = typewriter;
                setTyping(true);
                typewriter
                  .typeString(message)
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
          <FontAwesomeIcon
            icon={faCopy}
            style={{
              color: "white",
              marginTop: 10,
              cursor: "pointer",
            }}
            onClick={copyToClipboard}
          />
        </StyledTextWrapper>
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Message;
