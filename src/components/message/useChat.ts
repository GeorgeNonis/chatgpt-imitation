import toast from "react-hot-toast";
import { UseChatI } from "./message.types";
import { useAppContext } from "../../../context";

export const useChat = ({ message }: UseChatI) => {
  const { loading } = useAppContext();
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Text copied to clipboard");
    } catch (err) {
      const errMsg = err instanceof Error && err.message;
      toast.error(`Failed to copy text:${errMsg}`);
      console.error("Failed to copy text: ", { err });
    }
  };

  return {
    copyToClipboard,
    loading,
  };
};
