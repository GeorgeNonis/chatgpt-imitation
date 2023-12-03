import { useAppContext } from "../../context";

export const useSelectConv = () => {
  const { conversation, isLoading } = useAppContext();

  const id = conversation.id;

  const guard =
    isLoading && conversation.messages.length === 0 && id === undefined;

  const selectConversationHandler = () => {
    if (guard) return;
  };

  return {
    selectConversationHandler,
  };
};
