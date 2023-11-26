import { axiosInstance } from "./axios";
import { SendQuestionI } from "./services.types";

export const sendQuestion = async ({ value }: SendQuestionI) => {
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

  return message;
};
