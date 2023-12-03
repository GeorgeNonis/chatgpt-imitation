import { AppContextI } from "../../context/app/app.types";

export interface UseNewConvI {
  setConversation: AppContextI["setConversation"];
  setChatLog: AppContextI["setChatLog"];
  conversation: AppContextI["conversation"];
  id: string;
}
