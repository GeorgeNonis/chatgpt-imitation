"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextI, ConversationI } from "./app.types";
import { useService } from "../../hooks";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [currentMessageID, setCurrentMessageID] =
    useState<ConversationI["id"]>("");
  const [printedText, setPrintedText] = useState<string>("");
  const [conversation, setConversation] = useState<ConversationI>({
    id: "1995",
    messages: [],
  });

  const isLoading = loading || typing;

  const { sendQuestionHandler } = useService({
    setConversation,
    setLoading,
    setCurrentMessageID,
    setTyping,
  });

  const stopTypingHandler = () => {
    setConversation((prevState) => {
      const updatedState = prevState.messages.map((conv) => {
        if (conv.id === currentMessageID) {
          return { ...conv, message: printedText };
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
        printedText,
        setPrintedText,
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
