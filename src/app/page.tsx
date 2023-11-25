"use client";

import { Intro, TextArea } from "@/components";
import {
  StyledChatGptchat,
  StyledMain,
  StyledSideBar,
} from "../styles/page.styles";

const Home = () => {
  return (
    <StyledMain>
      <StyledSideBar>Sidebar</StyledSideBar>
      <StyledChatGptchat emptyChat={true}>
        <Intro />
        <TextArea />
      </StyledChatGptchat>
    </StyledMain>
  );
};
export default Home;
