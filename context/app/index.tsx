"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import { AppContextI, ConversationI, ConversationsI } from "./app.types";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [storedConvs, setStoredConvs] = useState<ConversationsI[]>([
    { id: "1995", conversation: [] },
  ]);
  const [currentConversation, setCurrentConversation] =
    useState<ConversationsI["id"]>("1995");
  const [conversation, setConversation] = useState<ConversationI[]>([]);

  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Typing");
    }
  };

  // useEffect(() => {
  //   setStoredConvs([{ id: "1995", conversation: [] }]);
  // }, []);

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
