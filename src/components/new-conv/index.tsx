import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledNewConversation, StyledText } from "./new-conv.styles";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const NewConversation = () => {
  return (
    <StyledNewConversation>
      <Image src={"/cat.png"} height={30} width={30} alt="MeowGPT" />
      <StyledText>MeoewGPT</StyledText>{" "}
      <FontAwesomeIcon
        icon={faPenToSquare}
        width={30}
        height={30}
        style={{
          justifySelf: "flex-end",
        }}
        stroke="red"
      />
    </StyledNewConversation>
  );
};
export default NewConversation;
