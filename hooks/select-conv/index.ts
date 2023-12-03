import { useAppContext } from "../../context";

export const useSelectConv = () => {
  const { conversation, isLoading, chatLog, setConversation } = useAppContext();

  const id = conversation.id;

  const guard = isLoading && id === undefined;

  const selectConversationHandler = (id: string) => {
    console.log({ guard });
    if (guard) return;
    const findChat = chatLog.find((c) => c.id === id);

    if (findChat?.messages.length === 0) return;

    console.log({ findChat, id });
  };

  return {
    selectConversationHandler,
  };
};
