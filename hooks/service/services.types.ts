import { AppContextI } from "../../context/app/app.types";

export interface UseServiceI {
  setConversation: AppContextI["setConversation"];
  setLoading: AppContextI["setLoading"];
  setTyping: AppContextI["setTyping"];
  setCurrentMessageID: AppContextI["setCurrentMessageID"];
  isLoading: boolean;
}
