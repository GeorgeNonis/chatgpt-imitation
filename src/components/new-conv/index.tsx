import { StyledNewConversation, StyledText } from "./new-conv.styles";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Icon from "../ui/icon";
import { useNewConv } from "../../../hooks";

const NewConversation = () => {
  const { newConversationHandler } = useNewConv();
  return (
    <StyledNewConversation onClick={newConversationHandler}>
      <Image src={"/cat.png"} height={30} width={30} alt="MeowGPT" />
      <StyledText>MeoewGPT</StyledText>{" "}
      <Icon
        icon={faPenToSquare}
        style={{
          width: 20,
          height: 20,
          justifySelf: "flex-end",
        }}
        data-testid="faPenToSquare"
      />
    </StyledNewConversation>
  );
};
export default NewConversation;
