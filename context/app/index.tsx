import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export interface AppContextI {
  response: string;
  setResponse: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextI | null>(null);

export const AppContextProvier = () => {
  const [response, setResponse] = useState("");

  return (
    <AppContext.Provider
      value={{ response, setResponse }}
    ></AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppContextProvier");
  }

  return context;
};
