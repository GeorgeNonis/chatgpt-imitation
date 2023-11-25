import toast from "react-hot-toast";
import { useAppContext } from "../../../context/app";

export const useChat = ({ message }: { message: string }) => {
  const { typewriterRef, setTyping } = useAppContext();
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
    typewriterRef,
    setTyping,
    copyToClipboard,
  };
};
