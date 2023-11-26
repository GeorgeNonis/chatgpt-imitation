import { styled } from "@stitches/react";

export const StyledConversation = styled("div", {
  position: "relative",
  display: "grid",
  gridAutoRows: "min-content",
  overflowY: "auto",
  marginBottom: 24,
  scrollBehavior: "smooth",
});
