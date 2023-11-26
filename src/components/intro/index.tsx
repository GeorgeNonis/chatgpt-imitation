import Image from "next/image";
import { StyledIntro, StyledTitle } from "./intro.styles";

const Intro = () => {
  return (
    <StyledIntro>
      <Image
        width={75}
        height={75}
        src={"/cat.png"}
        alt="chat gpt"
        style={{ borderRadius: "50%" }}
      />
      <StyledTitle>How can I help you today?</StyledTitle>
    </StyledIntro>
  );
};
export default Intro;
