import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../../context/app";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { axiosInstance } from "../../../axios";

export const useTextArea = () => {
  const { stopTyping, setConversation, setLoading, typing, loading } =
    useAppContext();
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const isLoading = typing || loading;

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const submitHandler = async () => {
    // Guard
    if (value.trim().length === 0) return;

    const loadingDummyId = uuidv4();

    setConversation((prevState) => {
      return [...prevState, { from: "You", message: value, id: uuidv4() }];
    });

    setLoading(true);
    setValue("");

    // Add a dummy object in the array which then will be removed or replaced with actuall message
    setConversation((prevState) => {
      return [
        ...prevState,
        { from: "MeowGPT", message: "Loading", id: loadingDummyId },
      ];
    });

    try {
      const response = await axiosInstance.post("", {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: value,
          },
        ],
        temperature: 0.7,
      });

      const message = response.data.choices[0]?.message.content;

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

  useEffect(() => {
    const validText = value.trim().length > 0;
    setValid(validText);
  }, [value]);

  return {
    textAreaHandler,
    submitHandler,
    stopTyping,
    setValue,
    valid,
    isLoading,
    value,
  };
};
