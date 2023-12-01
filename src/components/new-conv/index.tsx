import { StyledNewConversation, StyledText } from "./new-conv.styles";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Icon from "../ui/icon";

const NewConversation = () => {
  return (
    <StyledNewConversation>
      <Image src={"/cat.png"} height={30} width={30} alt="MeowGPT" />
      <StyledText>MeoewGPT</StyledText>{" "}
      <Icon
        icon={faPenToSquare}
        style={{
          justifySelf: "flex-end",
        }}
        data-testid="faPenToSquare"
      />
    </StyledNewConversation>
  );
};
export default NewConversation;
