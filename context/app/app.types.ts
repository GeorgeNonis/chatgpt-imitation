import { User } from "@/components/message/message.types";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ConvI {
  from: User;
  message: string;
  id: string;
  isPrinted: boolean;
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
  storedConvs: ConversationI[];
  currentConv: string;
  setTyping: Dispatch<SetStateAction<boolean>>;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setCurrentMsgId: Dispatch<SetStateAction<string>>;
  setStoredConvs: Dispatch<SetStateAction<ConversationI[]>>;
  stopTyping: () => void;
  newConversation: () => void;
  selectConversation: ({ id }: { id: string }) => void;
  messageStatusHandler: () => void;
}
