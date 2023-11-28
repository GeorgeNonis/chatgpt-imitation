import { User } from "@/components/message/message.types";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ConvI {
  from: User;
  message: string;
  id: string;
}
export interface ConversationI {
  id: string;
  messages: ConvI[] | [];
}

export interface AppContextI {
  typewriterRef: MutableRefObject<any>;
  typing: boolean;
  conversation: ConversationI;
  loading: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
