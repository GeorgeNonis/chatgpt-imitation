import { UserI } from "../ui/user/user.types";
export type User = "You" | "ChatGPT";

export type ChatI = {
  user: User;
} & UserI;
