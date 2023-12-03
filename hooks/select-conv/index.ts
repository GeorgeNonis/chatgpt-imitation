import { useAppContext } from "../../context";

export const useSelectConv = () => {
  const { conversation, isLoading, chatLog, setConversation } = useAppContext();

  const id = conversation.id;

  const guard =
    isLoading && conversation.messages.length === 0 && id === undefined;

  const selectConversationHandler = () => {
    if (guard) return;
    const findChat = chatLog.find((c) => c.id === id);

    console.log({ findChat });
  };

  return {
    selectConversationHandler,
  };
};
