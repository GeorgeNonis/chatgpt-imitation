import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export const useTextArea = () => {
  const [value, setValue] = useState("");
  const [btnState, setBtnState] = useState(false);

  const textAreaHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  useEffect(() => {
    const validText = value.trim().length > 1;
    setBtnState(validText);
  }, [value]);

  return {
    textAreaHandler,
    btnState,
  };
};
