import { MutableRefObject, SetStateAction } from "react";
export interface MeowGPTI {
  typewriterRef: MutableRefObject<any>;
  setTyping: (value: SetStateAction<boolean>) => void;
  message: string;
}
