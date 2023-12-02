import { styled } from "@stitches/react";

export const StyledHeader = styled("h2", {
  position: "absolute",
  top: 10,
  left: 8,
  color: "white",
  display: "grid",
  gap: 5,
  gridAutoFlow: "column",
  fontSize: "1rem",
  padding: 9,
  cursor: "pointer",
  "&:hover": {
    borderRadius: 10,
    backgroundColor: "#21212145",
  },
});

export const StyledVersion = styled("span", {
  color: "gray",
});
