import { styled } from "@stitches/react";

export const StyledIdeaContainer = styled("div", {
  position: "relative",
  display: "grid",
  padding: 15,
  border: "1px solid rgb(86, 88, 105)",
  borderRadius: 10,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgb(189 189 189 / 5%)",
  },
});

export const StyledContent = styled("div", {
  display: "grid",
  gap: 10,
});

export const StyledTitle = styled("h3", {
  color: "rgb(197, 197, 210)",
  fontSize: ".75rem",
  fontWeight: "600",
});
export const StyledIdea = styled("h3", {
  color: "rgb(197, 197, 210)",
  opacity: 0.5,
  fontSize: ".75rem",
  fontWeight: "400",
});
