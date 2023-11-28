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
import { useAppContext } from "../../hooks/app";

const Home = () => {
  const { conversation, typing } = useAppContext();
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
          <Conversation conversation={conversation} typing={typing} />
        ) : (
          <Intro />
        )}
        {!isThereConv && <Proposals />}
        <TextArea />
      </StyledChatGptchat>
    </StyledMain>
  );
};
export default Home;
