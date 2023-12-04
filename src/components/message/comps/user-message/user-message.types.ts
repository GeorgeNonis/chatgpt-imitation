import { ComponentProps, ReactNode } from "react";
import { StyledUserMessage } from "./user-message.styles";

export interface UserMessageI extends ComponentProps<typeof StyledUserMessage> {
  children: ReactNode;
}
