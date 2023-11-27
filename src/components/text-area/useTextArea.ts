import { ChangeEvent, useEffect, useState } from "react";
import { UseTextAreaI } from "./text-area.types";

export const useTextArea = ({ sendQuestionHandler }: UseTextAreaI) => {
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
    valid,
    value,
  };
};
