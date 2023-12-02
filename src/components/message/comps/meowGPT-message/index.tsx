import { MeowGPTI } from "./meowGPT-message.types";
import Typewriter from "@/components/custom-typewriter";

const MeowGPT = ({ message, isPrinted }: MeowGPTI) => {
  return <Typewriter message={message} isPrinted={isPrinted} />;
};
export default MeowGPT;
