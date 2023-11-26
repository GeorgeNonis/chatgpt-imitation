import { styled } from "@stitches/react";

export const StyledHeader = styled("h2", {
  position: "absolute",
  top: 8,
  left: 8,
  color: "white",
  fontSize: "1rem",
  padding: 9,
  cursor: "pointer",
  "&:hover": {
    borderRadius: 10,
    backgroundColor: "#21212145",
  },
});
