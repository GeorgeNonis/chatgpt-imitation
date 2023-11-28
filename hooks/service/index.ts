import { v4 as uuidv4 } from "uuid";
import { sendQuestion } from "../../services/post";
import axios from "axios";
import toast from "react-hot-toast";
import { UseServiceI } from "./services.types";

export const useService = ({ setConversation, setLoading }: UseServiceI) => {
  const sendQuestionHandler = async ({ value }: { value: string }) => {
    // Dummy id will be used later to detect it and replace it with actuall data
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
        switch (statusCode) {
          case 400:
            toast.error("Bad request. Please check your input.");
            break;
          case 401:
            toast.error(
              "You are not authorized. Please check your credentials."
            );
            break;
          case 403:
            toast.error(
              "Access forbidden. You don't have permission to access this."
            );
            break;
          case 404:
            toast.error("Resource not found.");
            break;
          case 429:
            toast.error("You are only allowed 3 messages every 1 minute.");
            break;
          case 500:
            toast.error("Internal Server Error. Please try again later.");
            break;
          default:
            toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        toast.error(
          "An unexpected error occurred. Please check your network connection."
        );
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
