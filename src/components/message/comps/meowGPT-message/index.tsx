import { useTypewriter } from "../../../../../hooks";
import { StyledTypewriter } from "./meowGPT-message.styles";
import { MeowGPTI } from "./meowGPT-message.types";

const MeowGPT = ({ message, isPrinted, ...props }: MeowGPTI) => {
  const { text } = useTypewriter({ message, isPrinted });
  return <StyledTypewriter {...props}>{text}</StyledTypewriter>;
};
export default MeowGPT;
