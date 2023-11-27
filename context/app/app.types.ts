import { User } from "@/components/message/message.types";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface ConvI {
  from: User;
  message: string;
  id: string;
  printerAlready: boolean;
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
  stopTyping: () => void;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  newConversation: () => void;
  setStoredConvs: Dispatch<SetStateAction<ConversationI[]>>;
  selectConversation: ({ id }: { id: string }) => void;
  printStatusHandler: (id: string) => void;
}
