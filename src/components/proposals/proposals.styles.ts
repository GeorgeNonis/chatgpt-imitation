import { styled } from "@stitches/react";

export const StyledProposals = styled("div", {
  display: "grid",
  gap: 10,
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  width: 800,
  marginInline: "auto",

  paddingBottom: "10px",
});
