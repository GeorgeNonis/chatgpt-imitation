"use client";

import {
  Intro,
  Proposals,
  TextArea,
  Conversation,
  Header,
  NewConversation,
  StoredConversations,
} from "@/components";
import {
  StyledChatGptchat,
  StyledMain,
  StyledSideBar,
} from "../styles/page.styles";
import { useApp } from "../../hooks/app";

const Home = () => {
  const { handlers, values } = useApp();
  const { conversation, isLoading, typing } = values;
  const { sendQuestionHandler, setTyping } = handlers;
  const isThereConv = conversation.conversation.length > 0;

  return (
    <StyledMain>
      <StyledSideBar>
        <NewConversation />
        <StoredConversations />
      </StyledSideBar>
      <StyledChatGptchat emptyChat={!isThereConv}>
        <Header />
        {isThereConv ? (
          <Conversation
            conversation={conversation}
            typing={typing}
            setTyping={setTyping}
          />
        ) : (
          <Intro />
        )}
        {!isThereConv && <Proposals />}
        <TextArea
          isLoading={isLoading}
          sendQuestionHandler={sendQuestionHandler}
        />
      </StyledChatGptchat>
    </StyledMain>
  );
};
export default Home;
