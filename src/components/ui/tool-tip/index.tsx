import { StyledReference, StyledTooltip } from "./tool-tip.styles";
import {
  useFloating,
  flip,
  shift,
  FloatingPortal,
  useInteractions,
  useHover,
} from "@floating-ui/react";
import { useState } from "react";
import { ToolTipProps } from "./tool-tip.types";

const ToolTip = ({ children, tooltip, css }: ToolTipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    middleware: [flip(), shift()],
    open: false,
    onOpenChange: setIsOpen,
    placement: "top",
  });

  const hover = useHover(context, { move: false });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <>
      <StyledReference
        ref={refs.setReference}
        {...getReferenceProps()}
        css={{ ...css }}
      >
        {children}
      </StyledReference>
      {isOpen && (
        <FloatingPortal>
          <StyledTooltip
            {...getFloatingProps()}
            ref={refs.setFloating}
            style={floatingStyles}
          >
            {tooltip}
          </StyledTooltip>
        </FloatingPortal>
      )}
    </>
  );
};
export default ToolTip;
