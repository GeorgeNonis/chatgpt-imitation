import { v4 as uuidv4 } from "uuid";
import { sendQuestion } from "../../services/post";
import axios from "axios";
import toast from "react-hot-toast";
import { UseServiceI } from "./services.types";
import { errorStatuses } from "../../config";
import { updateConv } from "../../services/patch";

export const useService = ({
  setConversation,
  setLoading,
  setCurrentMessageID,
  setTyping,
  isLoading,
}: UseServiceI) => {
  const sendQuestionHandler = async ({ value }: { value: string }) => {
    // GUARDS
    if (value.trim().length === 0 || isLoading) return;

    // Dummy id will be used later to detect it and replace it with actuall data
    const loadingDummyId = uuidv4();

    setConversation((prevState) => {
      const conv = prevState.messages;
      return {
        ...prevState,
        messages: [...conv, { from: "You", message: value, id: uuidv4() }],
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
      setTyping(true);
      setCurrentMessageID(loadingDummyId);
      setConversation((prevState) => {
        const replaceDummy = prevState.messages.map((c) => {
          if (c.id === loadingDummyId) {
            return { ...c, message: message };
          }
          return c;
        });
        return { ...prevState, messages: [...replaceDummy] };
      });

      // TESTING PURPOSES
      await updateConv({
        id: loadingDummyId,
        messages: [
          { from: "MeowGPT", id: "1", isPrinted: false, message: "HELLAS" },
          { from: "You", id: "1", message: "GREAT ALEXANDER" },
        ],
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const statusCode = error.response.status;
        const errorEntry = errorStatuses.find(
          (entry) => entry.status === statusCode
        );

        if (errorEntry) {
          toast.error(errorEntry.message);
        } else {
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
