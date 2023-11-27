"use client";

import { ReactNode, createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AppContextI, ConversationI } from "./app.types";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext<AppContextI | null>(null);

const dummy = { id: "", conversation: [{ from: "You", message: "" }] };

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [storedConvs, setStoredConvs] = useState<ConversationI[]>([]);
  const [conversation, setConversation] = useState<ConversationI>({
    id: uuidv4(),
    conversation: [],
  });

  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Typing");
    }
  };

  const selectConversation = ({ id }: { id: string }) => {
    const findConv = storedConvs.find((conv) => conv.id === id);
    if (findConv?.conversation) {
      setConversation({ ...findConv });
    }
  };

  const newConversation = () => {
    const convId = conversation?.id;

    const doesItExist = storedConvs.some((conv) => conv.id === convId);

    if (doesItExist) {
      setStoredConvs((prevState) => {
        const updatedState = prevState.map((conv) => {
          if (conv.id === convId) {
            return { ...conversation };
          }
          return conv;
        });
        return [...updatedState];
      });
    }

    // Check if theres already archived

    setConversation({ id: uuidv4(), conversation: [] });
  };

  return (
    <AppContext.Provider
      value={{
        typewriterRef,
        typing,
        conversation,
        loading,
        // currentConversation,
        storedConvs,
        setLoading,
        setConversation,
        setTyping,
        stopTyping,
        // setCurrentConversation,
        setStoredConvs,
        selectConversation,
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
