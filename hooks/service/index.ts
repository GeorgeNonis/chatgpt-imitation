import { v4 as uuidv4 } from "uuid";
import { sendQuestion } from "../../services/post";
import axios from "axios";
import toast from "react-hot-toast";
import { UseServiceI } from "./services.types";

export const useService = ({ setConversation, setLoading }: UseServiceI) => {
  const sendQuestionHandler = async ({ value }: { value: string }) => {
    const loadingDummyId = uuidv4();

    setConversation((prevState) => {
      const conv = prevState.messages;
      return {
        ...prevState,
        messages: [
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
        messages: [
          ...prevState.messages,
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

      // Replace the dummy state with the actuall message from the response
      setConversation((prevState) => {
        const replaceDummy = prevState.messages.map((c) => {
          if (c.id === loadingDummyId) {
            return { ...c, message: message };
          }
          return c;
        });
        return { ...prevState, messages: [...replaceDummy] };
      });
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
      // Take of the dummy "state" off in case an error
      setConversation((prevState) => {
        const removeDummy = prevState.messages.filter(
          (c) => c.id !== loadingDummyId
        );

        return { ...prevState, messages: [...removeDummy] };
      });
      console.error("Error with OpenAI API:", error);
    }
    setLoading(false);
  };
  return {
    sendQuestionHandler,
  };
};
