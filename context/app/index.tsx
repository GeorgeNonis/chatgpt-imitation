"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppContextI, ConversationI } from "./app.types";
import { useService } from "../../hooks";
import { v4 as uuid } from "uuid";
import { getHistory } from "../../services";

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [currentMessageID, setCurrentMessageID] =
    useState<ConversationI["id"]>("");
  const [printedText, setPrintedText] = useState<string>("");
  const [chatLog, setChatLog] = useState<ConversationI[]>([]);
  const [conversation, setConversation] = useState<ConversationI>({
    id: uuid(),
    messages: [],
  });

  const isLoading = loading || typing;

  const { sendQuestionHandler } = useService({
    setConversation,
    setLoading,
    setCurrentMessageID,
    setTyping,
    isLoading,
  });

  const stopTypingHandler = () => {
    setConversation((prevState) => {
      const updatedState = prevState.messages.map((conv) => {
        if (conv.id === currentMessageID) {
          return { ...conv, message: printedText, isPrinted: true };
        }
        return conv;
      });
      return { ...prevState, messages: [...updatedState] };
    });
    setTyping(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistory();
      setChatLog(data);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        conversation,
        loading,
        typing,
        isLoading,
        printedText,
        currentMessageID,
        chatLog,
        setPrintedText,
        setConversation,
        setLoading,
        setTyping,
        setCurrentMessageID,
        stopTypingHandler,
        sendQuestionHandler,
        setChatLog,
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
