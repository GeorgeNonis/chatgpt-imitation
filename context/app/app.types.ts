import { Dispatch, SetStateAction } from "react";

export interface YouI {
  from: "You";
}
export interface MeowGPTType {
  from: "MeowGPT";
  isPrinted: boolean;
}
export type ConvI = {
  message: string;
  id: string;
} & (YouI | MeowGPTType);

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
  printedText: string;
  conversation: ConversationI;
  currentMessageID: string;
  chatLog: ConversationI[];
  setPrintedText: Dispatch<SetStateAction<string>>;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTyping: Dispatch<SetStateAction<boolean>>;
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
  stopTypingHandler: () => void;
  setCurrentMessageID: Dispatch<SetStateAction<string>>;
  setChatLog: Dispatch<SetStateAction<ConversationI[]>>;
}
