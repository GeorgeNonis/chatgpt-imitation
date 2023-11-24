import { StyledArrowContainer } from "@/components/ui/arrow-up/arrow-up.styles";
import { styled } from "@stitches/react";

export const StyledIdeaContainer = styled("div", {
  position: "relative",
  display: "grid",
  gap: "2px",
  padding: 10,
  border: "1px solid rgb(86, 88, 105)",
  borderRadius: 8,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgb(189 189 189 / 5%)",
    [`${StyledArrowContainer}`]: {
      opacity: 1,
    },
  },
});

export const StyledTitle = styled("h3", {
  color: "rgb(197, 197, 210)",
  fontSize: ".75rem",
});
export const StyledIdea = styled("h3", {
  color: "rgb(197, 197, 210)",
  opacity: 0.5,
  fontSize: ".75rem",
  fontWeight: "400",
});
