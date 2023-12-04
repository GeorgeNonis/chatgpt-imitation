import { ComponentProps } from "react";
import { StyledTextArea } from "./text-area.styles";

export interface TextAreaI extends ComponentProps<typeof StyledTextArea> {
  ["data-testid"]?: string;
}
