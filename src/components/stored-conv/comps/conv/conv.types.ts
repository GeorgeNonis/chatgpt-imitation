import { ComponentProps, ReactNode } from "react";
import { StyledStoredConv } from "./conv.styles";

export interface StoredConversationI
  extends ComponentProps<typeof StyledStoredConv> {
  children: ReactNode;
}
