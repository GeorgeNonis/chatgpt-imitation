import { CSS } from "@stitches/react";
import { ReactNode } from "react";

export interface ToolTipProps {
  children: ReactNode;
  tooltip: string;
  css?: CSS;
}
