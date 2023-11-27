"use client";

import { useState } from "react";
import { ConversationI } from "./app.types";
import { useService } from "../service";

export const useApp = () => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [conversation, setConversation] = useState<ConversationI>({
    id: "1995",
    conversation: [],
  });

  const isLoading = loading || typing;

  const { sendQuestionHandler } = useService({ setConversation, setLoading });

  const values = {
    loading,
    typing,
    conversation,
    isLoading,
  };

  const handlers = {
    setLoading,
    setTyping,
    setConversation,
    sendQuestionHandler,
  };

  return {
    values,
    handlers,
  };
};
