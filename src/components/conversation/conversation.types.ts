import { Dispatch, SetStateAction } from "react";
import { ConversationI } from "../../../hooks/app/app.types";

export interface ConversationIn {
  conversation: ConversationI;
  typing: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
}
