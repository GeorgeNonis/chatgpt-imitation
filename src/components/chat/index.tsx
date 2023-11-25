"use client";

import Typewriter from "typewriter-effect";
import { StyledChat, StyledWrapper } from "./chat.styles";
import { useAppContext } from "../../../context/app";

const Chat = () => {
  const { response } = useAppContext();

  return (
    <StyledChat>
      <StyledWrapper>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(response).start();
          }}
          options={{
            // strings: [response],
            autoStart: true,
            loop: false,
            deleteSpeed: 0,
            cursor: "",
            delay: 0.4,
          }}
        />
      </StyledWrapper>
    </StyledChat>
  );
};
export default Chat;
