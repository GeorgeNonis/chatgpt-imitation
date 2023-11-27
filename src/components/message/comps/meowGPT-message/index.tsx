import Typewriter from "typewriter-effect";
import { MeowGPTI } from "./meowGPT-message.types";
import { useAppContext } from "../../../../../context/app";
import { useState } from "react";

const MeowGPT = ({ message, id }: MeowGPTI) => {
  const { typewriterRef, setTyping, printStatusHandler, setCurrentMsgId } =
    useAppContext();
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriterRef.current = typewriter;
        setTyping(true);
        setCurrentMsgId(id);
        typewriter
          .typeString(message)
          .callFunction(() => {
            printStatusHandler();
            setTyping(false);
          })
          .start();
      }}
      options={{
        autoStart: true,
        loop: false,
        deleteSpeed: 0,
        cursor: "",
        delay: 0.01,
      }}
    />
  );
};
export default MeowGPT;
