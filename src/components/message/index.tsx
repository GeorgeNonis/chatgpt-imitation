"use client";

import Typewriter from "typewriter-effect";
import {
  StyledChat,
  StyledChatWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTypeWriterWrapper,
} from "./message.styles";
import { ToolTip, User } from "..";
import { ChatI } from "./message.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "./useChat";
import ReactLoading from "react-loading";
import UserMessage from "./comps/user-message";
import MeowGPT from "./comps/meowGPT-message";

const Message = ({ user, message, canCopy, ...props }: ChatI) => {
  const { copyToClipboard, setTyping, typewriterRef } = useChat({
    message,
  });

  const onGoingRequest = message === "Loading";
  const meowGPT = user === "MeowGPT";

  return (
    <StyledChatWrapper>
      <StyledChat>
        <User user={user} {...props} />
        <StyledTextWrapper>
          <StyledText>{user}</StyledText>
          <StyledTypeWriterWrapper>
            {onGoingRequest ? (
              <ReactLoading type={"bubbles"} color={"gray"} />
            ) : meowGPT ? (
              <MeowGPT
                message={message}
                setTyping={setTyping}
                typewriterRef={typewriterRef}
              />
            ) : (
              <UserMessage>{message}</UserMessage>
            )}
          </StyledTypeWriterWrapper>
          {!canCopy && !onGoingRequest && (
            <ToolTip tooltip="Copy" css={{ placeSelf: "flex-start" }} off={5}>
              <FontAwesomeIcon
                icon={faCopy}
                style={{
                  color: "white",
                  marginTop: 10,
                  cursor: "pointer",
                }}
                onClick={copyToClipboard}
              />
            </ToolTip>
          )}
        </StyledTextWrapper>
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Message;
