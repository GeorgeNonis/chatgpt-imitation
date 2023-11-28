import { ConversationI } from "../../context/app/app.types";
import { Dispatch, SetStateAction } from "react";

export interface UseServiceI {
  setConversation: Dispatch<SetStateAction<ConversationI>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
