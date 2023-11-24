import { styled } from "@stitches/react";

export const StyledIntro = styled("div", {
  display: "grid",
  gap: 16,
  placeContent: "center",
  justifyItems: "center",
});

export const StyledTitle = styled("h3", {
  color: "white",
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "2rem",
});

export const StyledWarning = styled("h3", {
  paddingTop: "10px",
  color: "#b7b7b7",
  textAlign: "center",
  fontSize: ".75rem",
});
