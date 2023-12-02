import useTypewriter from "../../../hooks/typewriter";
import { StyledTypewriter } from "./custom-typewriter.styles";

const Typewriter = ({
  message,
  isPrinted,
}: {
  message: string;
  isPrinted: boolean;
}) => {
  const { text } = useTypewriter({ message, isPrinted });
  return <StyledTypewriter>{text}</StyledTypewriter>;
};
export default Typewriter;
