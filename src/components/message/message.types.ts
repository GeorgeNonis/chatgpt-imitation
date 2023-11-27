import { UserI } from "../ui/user/user.types";
export type User = "You" | "MeowGPT";

export type ChatI = {
  user: User;
  message: string;
  canCopy: boolean;
} & UserI;
