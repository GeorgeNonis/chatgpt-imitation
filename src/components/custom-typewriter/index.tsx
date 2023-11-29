import useTypewriter from "../../../hooks/typewriter";
import { StyledTypewriter } from "./custom-typewriter.styles";

const Typewriter = ({ message }: { message: string }) => {
  const { text } = useTypewriter({ message });
  return <StyledTypewriter>{text}</StyledTypewriter>;
};
export default Typewriter;
