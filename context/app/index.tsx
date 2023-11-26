"use client";

import { ReactNode, createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AppContextI, ConversationI } from "./app.types";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [conversation, setConversation] = useState<ConversationI[]>([]);

  const controller = new AbortController();

  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Typing");
    }
  };

  const cancelRequest = () => {
    toast.success("Successfully stoped the request");
    console.log("aborted");

    try {
      controller.abort();
      console.log("worked");
    } catch (error) {
      console.log({ error });
    }
  };

  const stopButtonHandler = () => {
    return loading ? cancelRequest : stopTyping;
  };

  return (
    <AppContext.Provider
      value={{
        typewriterRef,
        typing,
        conversation,
        loading,
        setLoading,
        setConversation,
        setTyping,
        stopTyping,
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
