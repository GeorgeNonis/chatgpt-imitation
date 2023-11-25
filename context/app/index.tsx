"use client";

import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { LOREM_IPSUM } from "../../config";

export interface AppContextI {
  response: string;
  typewriterRef: MutableRefObject<any>;
  typing: boolean;
  setTyping: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<string>>;
  stopTyping: () => void;
}

export const AppContext = createContext<AppContextI | null>(null);
import toast from "react-hot-toast";
export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState("");
  const [typing, setTyping] = useState(false);
  const typewriterRef = useRef<any>(null);

  const stopTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.stop();
      setTyping(false);
      toast.success("Stoped Writing");
    }
  };

  return (
    <AppContext.Provider
      value={{
        response,
        typewriterRef,
        typing,
        setResponse,
        stopTyping,
        setTyping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvier");
  }

  return context;
};
