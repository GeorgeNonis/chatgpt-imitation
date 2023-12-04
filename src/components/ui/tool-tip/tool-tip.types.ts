import { CSS } from "@stitches/react";
import { ComponentProps, ReactNode } from "react";
import { StyledReference } from "./tool-tip.styles";

export interface ToolTipProps extends ComponentProps<typeof StyledReference> {
  children: ReactNode;
  tooltip: string;
  off?: number;
  css?: CSS;
}
