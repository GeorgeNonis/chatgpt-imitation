import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/app";
import { sendQuestion } from "../services/post";
import axios from "axios";
import toast from "react-hot-toast";

export const useService = () => {
  const { setConversation, setLoading, setCurrentMsgId } = useAppContext();

  const sendQuestionHandler = async ({ value }: { value: string }) => {
    const loadingDummyId = uuidv4();

    setConversation((prevState) => {
      const conv = prevState.conversation;
      return {
        ...prevState,
        conversation: [
          ...conv,
          { from: "You", message: value, id: uuidv4(), isPrinted: false },
        ],
      };
    });

    setLoading(true);

    // Add a dummy object in the array which then will be removed or replaced with actuall message
    setConversation((prevState) => {
      return {
        ...prevState,
        conversation: [
          ...prevState.conversation,
          {
            from: "MeowGPT",
            message: "Loading",
            id: loadingDummyId,
            isPrinted: false,
          },
        ],
      };
    });

    try {
      // HTTP REQ
      const message = await sendQuestion({ value });

      setConversation((prevState) => {
        const replaceDummy = prevState.conversation.map((c) => {
          if (c.id === loadingDummyId) {
            return { ...c, message: message };
          }
          return c;
        });
        return { ...prevState, conversation: [...replaceDummy] };
      });
      setCurrentMsgId(loadingDummyId);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const statusCode = error.response.status;
        if (statusCode === 429) {
          toast.error("You are only allowed 3 messages every 1 minute");
        } else {
          toast.error("An error occurred");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
      // Take of the dummy "state" in case an error
      setConversation((prevState) => {
        const removeDummy = prevState.conversation.filter(
          (c) => c.id !== loadingDummyId
        );

        return { ...prevState, conversation: [...removeDummy] };
      });
      console.error("Error with OpenAI API:", error);
    }
    setLoading(false);
  };
  return {
    sendQuestionHandler,
  };
};
