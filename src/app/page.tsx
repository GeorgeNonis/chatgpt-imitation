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
import { useAppContext } from "../../context/app";
import StoredConversation from "@/components/stored-conv/comps/conv";

const Home = () => {
  const { conversation } = useAppContext();
  const isThereConv = conversation.length > 0;

  return (
    <StyledMain>
      <StyledSideBar>
        <NewConversation />
        <StoredConversations>
          <StoredConversation>
            Giorgos Nonissssssssssssssssssssssssss
          </StoredConversation>
        </StoredConversations>
      </StyledSideBar>
      <StyledChatGptchat emptyChat={!isThereConv}>
        <Header />
        {isThereConv ? <Conversation /> : <Intro />}
        {!isThereConv && <Proposals />}
        <TextArea />
      </StyledChatGptchat>
    </StyledMain>
  );
};
export default Home;
