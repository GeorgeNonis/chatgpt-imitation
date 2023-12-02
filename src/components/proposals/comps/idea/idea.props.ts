import { Attributes, PropsWithoutRef, RefAttributes } from "react";

export type IdeaI = {
  title: string;
  idea: string;
  ["data-testid"]?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
