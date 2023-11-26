"use client";
import {
  StyledChat,
  StyledChatWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTypeWriterWrapper,
} from "./message.styles";
import { User } from "..";
import { ChatI } from "./message.types";
import { useChat } from "./useChat";
import ReactLoading from "react-loading";
import { Copy, MeowGPT, UserMessage } from "./comps";

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
          {!canCopy && !onGoingRequest && <Copy onClick={copyToClipboard} />}
        </StyledTextWrapper>
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Message;
