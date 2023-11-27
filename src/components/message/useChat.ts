import toast from "react-hot-toast";
import { UseChatI } from "./message.types";

export const useChat = ({ message }: UseChatI) => {
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
  };
};
