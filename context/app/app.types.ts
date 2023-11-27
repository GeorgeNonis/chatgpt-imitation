import { User } from "@/components/message/message.types";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ConvI {
  from: User;
  message: string;
  id: string;
}
export interface ConversationI {
  id: string;
  conversation: ConvI[] | [];
}

export interface AppContextI {
  typewriterRef: MutableRefObject<any>;
  typing: boolean;
  conversation: ConversationI;
  loading: boolean;
  // currentConversation: string;
  storedConvs: ConversationI[];
  setTyping: Dispatch<SetStateAction<boolean>>;
  stopTyping: () => void;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  // setCurrentConversation: Dispatch<SetStateAction<string>>;
  setStoredConvs: Dispatch<SetStateAction<ConversationI[]>>;
  selectConversation: ({ id }: { id: string }) => void;
}
