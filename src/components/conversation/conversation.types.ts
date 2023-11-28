import { Dispatch, SetStateAction } from "react";
import { ConversationI } from "../../../context/app/app.types";

export interface ConversationIn {
  conversation: ConversationI;
  typing: boolean;
}
