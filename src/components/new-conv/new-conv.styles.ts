import { styled } from "@stitches/react";

export const StyledNewConversation = styled("div", {
  position: "absolute",
  top: 10,
  display: "grid",
  gridTemplateColumns: "3fr 3fr 6fr",
  gap: 5,
  color: "white",
  placeItems: "center",
  padding: "5px 10px",
  borderRadius: 10,
  transition: "all .1s ease-in-out",

  "&:hover": {
    backgroundColor: "rgb(128 128 128 / 19%)",
  },
  cursor: "pointer",
});

export const StyledText = styled("span", {});
