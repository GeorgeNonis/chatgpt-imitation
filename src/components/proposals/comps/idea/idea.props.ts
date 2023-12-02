import { ComponentProps } from "react";
import { StyledIdeaContainer } from "./idea.styles";

export type IdeaI = {
  title: string;
  idea: string;
  ["data-testid"]?: string;
} & ComponentProps<typeof StyledIdeaContainer>;
