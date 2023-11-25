"use client";

import { Message, Intro, Proposals, TextArea } from "@/components";
import {
  StyledChatGptchat,
  StyledMain,
  StyledSideBar,
} from "../styles/page.styles";
import { useAppContext } from "../../context/app";

const Home = () => {
  const { response } = useAppContext();
  return (
    <StyledMain>
      <StyledSideBar>Sidebar</StyledSideBar>
      <StyledChatGptchat emptyChat={response.trim().length === 0}>
        {response ? <Message src="/me.jpg" user="You" /> : <Intro />}
        {!response && <Proposals />}
        <TextArea />
      </StyledChatGptchat>
    </StyledMain>
  );
};
export default Home;
