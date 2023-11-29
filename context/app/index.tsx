"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { AppContextI, ConversationI, StopTypingI } from "./app.types";
import { useService } from "../../hooks";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [currentMessageID, setCurrentMessageID] =
    useState<ConversationI["id"]>("");
  const [conversation, setConversation] = useState<ConversationI>({
    id: "1995",
    messages: [],
  });

  const isLoading = loading || typing;

  const { sendQuestionHandler } = useService({
    setConversation,
    setLoading,
    setCurrentMessageID,
  });

  const stopTypingHandler = ({ text }: StopTypingI) => {
    setConversation((prevState) => {
      const updatedState = prevState.messages.map((conv) => {
        if (conv.id === currentMessageID) {
          return { ...conv, message: text };
        }
        return conv;
      });
      return { ...prevState, messages: [...updatedState] };
    });
    setTyping(false);
  };

  return (
    <AppContext.Provider
      value={{
        conversation,
        loading,
        typing,
        isLoading,
        setConversation,
        setLoading,
        setTyping,
        setCurrentMessageID,
        stopTypingHandler,
        sendQuestionHandler,
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
