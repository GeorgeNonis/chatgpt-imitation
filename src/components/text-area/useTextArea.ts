import { ChangeEvent, useEffect, useState } from "react";
import { useAppContext } from "../../../context/app";
import { useService } from "../../../hooks";

export const useTextArea = () => {
  const { typing, loading } = useAppContext();
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const { sendQuestionHandler } = useService();

  const isLoading = typing || loading;

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const submitHandler = async () => {
    // Guard
    if (value.trim().length === 0) return;

    sendQuestionHandler({ value });
  };

  useEffect(() => {
    const validText = value.trim().length > 0;
    setValid(validText);
  }, [value]);

  return {
    textAreaHandler,
    submitHandler,
    setValue,
    valid,
    isLoading,
    value,
  };
};
