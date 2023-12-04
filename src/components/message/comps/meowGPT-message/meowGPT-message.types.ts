import { ComponentProps } from "react";
import { ConvI, MeowGPTType } from "../../../../../context/app/app.types";
import { StyledTypewriter } from "./meowGPT-message.styles";

export interface MeowGPTI extends ComponentProps<typeof StyledTypewriter> {
  message: ConvI["message"];
  isPrinted: MeowGPTType["isPrinted"];
}
