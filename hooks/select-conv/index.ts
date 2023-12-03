import { useAppContext } from "../../context";

export const useSelectConv = () => {
  const { isLoading, chatLog, setConversation } = useAppContext();

  const selectConversationHandler = (id: string) => {
    // Guard
    if (isLoading || !id) return;

    const findChat = chatLog.find((c) => c.id === id);

    // Proceeds only if its valid conversation - Just a guard in case there has been a wrong input in the DB
    if (findChat && findChat.messages.length > 0) {
      console.log({ findChat });
      setConversation({ ...findChat });
    }
  };

  return {
    selectConversationHandler,
  };
};
