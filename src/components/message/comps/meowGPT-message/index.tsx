import { MeowGPTI } from "./meowGPT-message.types";
import Typewriter from "@/components/custom-typewriter";

const MeowGPT = ({ message }: MeowGPTI) => {
  return <Typewriter message={message} />;
};
export default MeowGPT;
