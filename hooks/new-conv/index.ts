import { useAppContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

export const useNewConv = () => {
  const { setChatLog, setConversation, conversation, isLoading } =
    useAppContext();
  const id = conversation.id;

  const newConversationHandler = () => {
    if (isLoading || conversation.messages.length === 0 || id == undefined)
      return;
    const newId = uuidv4();

    setChatLog((prevState) => {
      const doesItExist = prevState.find((c) => c.id === id);

      if (doesItExist) {
        const updatedChatLog = prevState.map((c) => {
          if (c.id === id) {
            return { ...c, messages: [...conversation.messages] };
          }
          return c;
        });
        return [...updatedChatLog];
      } else {
        return [...prevState, { ...conversation }];
      }
    });
    setConversation({ id: newId, messages: [] });
  };

  return {
    newConversationHandler,
  };
};
