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

const Message = ({ canCopy, ...props }: ChatI) => {
  const { message, from, printerAlready } = props;
  const { copyToClipboard } = useChat({ message });
  const onGoingRequest = message === "Loading";
  const meowGPT = from === "MeowGPT";

  return (
    <StyledChatWrapper>
      <StyledChat>
        <User user={from} />
        <StyledTextWrapper>
          <StyledText>{from}</StyledText>
          <StyledTypeWriterWrapper>
            {onGoingRequest ? (
              <ReactLoading type={"bubbles"} color={"gray"} />
            ) : printerAlready ? (
              <UserMessage>{message}</UserMessage>
            ) : meowGPT ? (
              <MeowGPT {...props} />
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
