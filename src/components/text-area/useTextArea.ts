import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../../context/app";

export const useTextArea = () => {
  const { setResponse, stopTyping, typing } = useAppContext();
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content:
                "Can you tell me which day is the independent day of Cyprus?",
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
      setResponse(message);
    } catch (error) {
      console.error("Error with OpenAI API:", error);
    }
  };

  useEffect(() => {
    const validText = value.trim().length > 0;
    setValid(validText);
  }, [value]);

  return {
    textAreaHandler,
    submitHandler,
    stopTyping,
    valid,
    typing,
  };
};
