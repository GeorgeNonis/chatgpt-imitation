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

export interface StopTypingI {
  text: string;
}

export interface AppContextI {
  loading: boolean;
  typing: boolean;
  isLoading: boolean;
  conversation: ConversationI;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTyping: Dispatch<SetStateAction<boolean>>;
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
  stopTypingHandler: ({ text }: StopTypingI) => void;
  setCurrentMessageID: Dispatch<SetStateAction<string>>;
}
