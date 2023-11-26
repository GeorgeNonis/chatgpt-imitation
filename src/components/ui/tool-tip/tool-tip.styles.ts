import { styled } from "@stitches/react";

export const StyledTooltip = styled("div", {
  backgroundColor: "black",
  color: "white",
  border: "1px solid $neutral200",
  boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  fontSize: 14,
  padding: "8px 8px",
  width: "max-content",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "black transparent transparent transparent",
  },
});

export const StyledReference = styled("div", {
  display: "grid",
  placeSelf: "center",
  width: "fit-content",
  height: "fit-content",
});
