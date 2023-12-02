import { ChangeEvent, useEffect, useState } from "react";
import { useAppContext } from "../../../context";

export const useTextArea = () => {
  const { sendQuestionHandler, stopTypingHandler, isLoading, typing } =
    useAppContext();
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onSumbitHandler = async () => {
    // Guard
    if (value.trim().length === 0) return;

    sendQuestionHandler({ value });
  };

  useEffect(() => {
    const validText = value.trim().length > 0;
    setValid(validText);
  }, [value]);

  return {
    onChangeHandler,
    onSumbitHandler,
    setValue,
    stopTypingHandler,
    valid,
    value,
    isLoading,
    typing,
  };
};
