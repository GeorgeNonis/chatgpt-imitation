import Typewriter from "typewriter-effect";
import { MeowGPTI } from "./meowGPT-message.types";

const MeowGPT = ({ message, setTyping }: MeowGPTI) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        setTyping(true);
        typewriter
          .typeString(message)
          .callFunction(() => {
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
