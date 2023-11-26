import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/app";
import { sendQuestion } from "../services/post";
import axios from "axios";
import toast from "react-hot-toast";

export const useService = () => {
  const { setConversation, setLoading } = useAppContext();

  const sendQuestionHandler = async ({ value }: { value: string }) => {
    const loadingDummyId = uuidv4();

    setConversation((prevState) => {
      return [...prevState, { from: "You", message: value, id: uuidv4() }];
    });

    setLoading(true);

    // Add a dummy object in the array which then will be removed or replaced with actuall message
    setConversation((prevState) => {
      return [
        ...prevState,
        { from: "MeowGPT", message: "Loading", id: loadingDummyId },
      ];
    });

    try {
      // HTTP REQ
      const message = await sendQuestion({ value });

      setConversation((prevState) => {
        const replaceDummy = prevState.map((c) => {
          if (c.id === loadingDummyId) {
            return { ...c, message: message };
          }
          return c;
        });
        return [...replaceDummy];
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
      // Take of the dummy "state" in case an error
      setConversation((prevState) => {
        const removeDummy = prevState.filter((c) => c.id !== loadingDummyId);

        return [...removeDummy];
      });
      console.error("Error with OpenAI API:", error);
    }
    setLoading(false);
  };
  return {
    sendQuestionHandler,
  };
};
