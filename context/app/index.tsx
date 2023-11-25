"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { LOREM_IPSUM } from "../../config";

export interface AppContextI {
  response: string;
  setResponse: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = ({ children }: { children: ReactNode }) => {
  const [response, setResponse] = useState(LOREM_IPSUM);

  return (
    <AppContext.Provider value={{ response, setResponse }}>
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
