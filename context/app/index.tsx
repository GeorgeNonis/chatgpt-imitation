"use client";

import { ReactNode, createContext, useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AppContextI, ConversationI } from "./app.types";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [storedConvs, setStoredConvs] = useState<ConversationI[]>([]);
  const [currentConv, setCurrentConv] = useState<ConversationI["id"]>(uuidv4());
  const [currentMsgId, setCurrentMsgId] = useState<ConversationI["id"]>(
    uuidv4()
  );
  const [conversation, setConversation] = useState<ConversationI>({
    id: currentConv,
    conversation: [],
  });

  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Typing");
      messageStatusHandler();
    }
  };

  const selectConversation = ({ id }: { id: string }) => {
    if (currentConv === id) return;
    const findConv = storedConvs.find((conv) => conv.id === id);
    if (findConv?.conversation) {
      setCurrentConv(findConv.id);
      setConversation({ ...findConv });
    }
  };

  const newConversation = () => {
    // If theres no msgs then no ready to do anything
    if (conversation.conversation.length === 0) return;
    const convId = conversation?.id;

    const doesItExist = storedConvs.some((conv) => conv.id === convId);
    // If it exists to updated the old state ofthe conversation
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
    } else {
      setStoredConvs((prevState) => [...prevState, { ...conversation }]);
    }
    // Otherwise just stored it and create new one
    const generatenewId = uuidv4();
    setCurrentConv(generatenewId);
    setConversation({ id: generatenewId, conversation: [] });
  };

  const messageStatusHandler = () => {
    // This handler toggles the [isPrinted] to true - thats why the currentMsgId is needed
    setConversation((prevState) => {
      const updatedState = prevState.conversation.map((msg) => {
        if (msg.id === currentMsgId) {
          return { ...msg, isPrinted: true };
        }
        return msg;
      });
      return { ...prevState, conversation: [...updatedState] };
    });
  };

  return (
    <AppContext.Provider
      value={{
        typewriterRef,
        typing,
        conversation,
        loading,
        storedConvs,
        currentConv,
        setLoading,
        setCurrentMsgId,
        setConversation,
        setTyping,
        setStoredConvs,
        stopTyping,
        newConversation,
        selectConversation,
        messageStatusHandler,
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
