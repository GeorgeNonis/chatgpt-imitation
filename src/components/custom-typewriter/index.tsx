import useTypewriter from "../../../hooks/typewriter";
import { StyledTypewriter } from "./custom-typewriter.styles";

const Typewriter = () => {
  const {} = useTypewriter();
  return <StyledTypewriter></StyledTypewriter>;
};
export default Typewriter;
