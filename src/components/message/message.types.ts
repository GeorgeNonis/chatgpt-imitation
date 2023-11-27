import { Dispatch, SetStateAction } from "react";
import { ConvI } from "../../../hooks/app/app.types";

export type User = "You" | "MeowGPT";

export type ChatI = {
  canCopy: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
} & ConvI;

export interface UseChatI {
  message: string;
}
