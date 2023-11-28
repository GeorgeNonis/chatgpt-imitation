import { styled } from "@stitches/react";

export const StyledStoredConv = styled("div", {
  position: "relative",
  textAlign: "center",
  color: "white",
  padding: 10,
  borderRadius: 10,
  fontSize: ".9rem",
  fontWeight: 400,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",

  transition: "all .1s ease-in-out",
  "&:hover": {
    backgroundColor: "rgb(128 128 128 / 19%)",
  },
  cursor: "pointer",

  variants: {
    selected: {
      true: {
        backgroundColor: "rgb(128 128 128 / 19%)",
      },
    },
  },
});

export const StyledCover = styled("div", {
  transition: "all .1s ease-in-out",
  "&:hover": {
    backgroundColor: "rgb(128 128 128 / 19%)",
  },
});

export const StyledShadow = styled("div", {
  position: "absolute",
  height: "100%",
  width: 25,
  right: 0,
  top: 0,
  backgroundImage:
    "linear-gradient(to right, #ffffff00, #0000005e, #000000, #000000, #000000)",
});
