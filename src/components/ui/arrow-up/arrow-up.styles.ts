import { styled } from "@stitches/react";

export const StyledArrowContainer = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  paddingRight: 8,
  paddingLeft: 8,
  opacity: 0,

  display: "grid",
  placeContent: "center",

  background:
    "linear-gradient(to left, rgb(189 189 189 / 5%), rgba(0, 0, 0, 0))",
});
