import { CSSProperties } from "react";

export interface ArrowUpI {
  theme?: "dark" | "white";
  isValid?: boolean;
  css?: CSSProperties;
  onClick?: () => void;
}
