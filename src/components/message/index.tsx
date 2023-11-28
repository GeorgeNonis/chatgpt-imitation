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
  const { message, from } = props;
  const { copyToClipboard, loading } = useChat({ message });
  const onGoingRequest = message === "Loading";
  const meowGPT = from === "MeowGPT";

  const typeOfChat = onGoingRequest ? (
    <ReactLoading type={"bubbles"} color={"gray"} />
  ) : meowGPT ? (
    <MeowGPT {...props} />
  ) : (
    <UserMessage>{message}</UserMessage>
  );

  return (
    <StyledChatWrapper>
      <StyledChat>
        <User user={from} />
        <StyledTextWrapper>
          <StyledText>{from}</StyledText>
          <StyledTypeWriterWrapper>{typeOfChat}</StyledTypeWriterWrapper>
          {!canCopy && !onGoingRequest && <Copy onClick={copyToClipboard} />}
        </StyledTextWrapper>
      </StyledChat>
    </StyledChatWrapper>
  );
};
export default Message;
