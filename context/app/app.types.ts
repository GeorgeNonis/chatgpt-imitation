import { User } from "@/components/message/message.types";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ConversationI {
  from: User;
  message: string;
  id: string;
}

export interface ConversationsI {
  id: string;
  conversation: ConversationI[];
}

export interface AppContextI {
  typewriterRef: MutableRefObject<any>;
  typing: boolean;
  conversation: ConversationI[];
  loading: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
  stopTyping: () => void;
  setConversation: Dispatch<SetStateAction<ConversationI[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
