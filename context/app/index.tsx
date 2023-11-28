"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ConversationI } from "./app.types";
import { useService } from "../../hooks";

export interface AppContextI {
  loading: boolean;
  typing: boolean;
  isLoading: boolean;
  conversation: ConversationI;
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTyping: Dispatch<SetStateAction<boolean>>;
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
}

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [conversation, setConversation] = useState<ConversationI>({
    id: "1995",
    messages: [],
  });

  const isLoading = loading || typing;

  const { sendQuestionHandler } = useService({ setConversation, setLoading });

  return (
    <AppContext.Provider
      value={{
        conversation,
        loading,
        typing,
        isLoading,
        sendQuestionHandler,
        setConversation,
        setLoading,
        setTyping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvier");
  }

  return context;
};
