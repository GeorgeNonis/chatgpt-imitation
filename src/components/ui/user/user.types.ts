import { User } from "@/components/message/message.types";
import { ComponentProps } from "react";
import { StyledUser } from "./user.styles";

export interface UserI extends ComponentProps<typeof StyledUser> {
  height?: number;
  width?: number;
  alt?: string;
  user: User;
}
