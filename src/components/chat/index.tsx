import Typewriter from "typewriter-effect";
import { StyledChat } from "./chat.styles";

const Chat = () => {
  return (
    <StyledChat>
      <Typewriter
        options={{
          strings: [
            "Hello, this is a typing effect!",
            "It can display multiple strings.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </StyledChat>
  );
};
export default Chat;
