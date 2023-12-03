import { useAppContext } from "../../context";

export const useSelectConv = () => {
  const { isLoading, chatLog, conversation, setConversation, setChatLog } =
    useAppContext();

  const selectConversationHandler = (id: string) => {
    // Guard
    if (isLoading || !id) return;
    const findLog = chatLog.find((c) => c.id === conversation.id);

    // Check if current chat is already saved - if not to saved it to chat log
    if (!findLog) {
      setChatLog((prevState) => [...prevState, { ...conversation }]);
    }

    // When switching between chat logs to check if the current conversation - log has the same state in chat log

    const sameLength =
      findLog?.messages.length === conversation.messages.length;

    if (!sameLength) {
      setChatLog((prevState) => {
        const updatedState = prevState.map((c) => {
          if (c.id === conversation.id) {
            return { ...c, messages: [...conversation.messages] };
          }
          return c;
        });
        return [...updatedState];
      });
    }

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
