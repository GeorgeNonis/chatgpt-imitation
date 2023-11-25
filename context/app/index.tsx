"use client";

import { ReactNode, createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AppContextI, ConversationI } from "./app.types";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [conversation, setConversation] = useState<ConversationI[]>([]);
  const [typing, setTyping] = useState(false);

  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Typing");
    }
  };

  return (
    <AppContext.Provider
      value={{
        typewriterRef,
        typing,
        conversation,
        setConversation,
        stopTyping,
        setTyping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Context Guard
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvier");
  }

  return context;
};
