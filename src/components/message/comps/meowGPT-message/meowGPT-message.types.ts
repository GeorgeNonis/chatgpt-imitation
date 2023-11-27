import { Dispatch, SetStateAction } from "react";
import { ConvI } from "../../../../../hooks/app/app.types";

export interface MeowGPTI {
  message: ConvI["message"];
  setTyping: Dispatch<SetStateAction<boolean>>;
}
