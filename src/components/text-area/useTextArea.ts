import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../../context/app";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const useTextArea = () => {
  const { stopTyping, setConversation, setLoading, typing, loading } =
    useAppContext();
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const submitHandler = async () => {
    setLoading(true);
    setConversation((prevState) => {
      return [...prevState, { from: "You", message: value, id: uuidv4() }];
    });
    setValue("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: value,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`,
          },
        }
      );

      const message = response.data.choices[0]?.message.content;
      setConversation((prevState) => {
        return [
          ...prevState,
          { from: "MeowGPT", message: message, id: uuidv4() },
        ];
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
      console.error("Error with OpenAI API:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const validText = value.trim().length > 0;
    setValid(validText);
  }, [value]);

  const isLoading = typing || loading;

  console.log({ isLoading, typing, loading });

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
