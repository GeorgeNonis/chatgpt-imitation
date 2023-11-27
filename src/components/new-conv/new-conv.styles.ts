import { styled } from "@stitches/react";

export const StyledNewConversation = styled("div", {
  display: "grid",
  gridTemplateColumns: "3fr 3fr 6fr",
  gap: 5,
  color: "white",
  placeItems: "center",
  cursor: "pointer",
  padding: 5,
  borderRadius: 10,
  transition: "all .1s ease-in-out",

  "&:hover": {
    backgroundColor: "rgb(128 128 128 / 19%)",
  },
});

export const StyledText = styled("span", {});
