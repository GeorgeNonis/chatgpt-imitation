import { styled } from "@stitches/react";

export const StyledMain = styled("main", {
  display: "grid",
  gridTemplateColumns: "1.5fr 10.5fr",
  height: "100vh",
});

export const StyledSideBar = styled("div", {
  display: "grid",
  gridTemplateRows: ".5fr 11.5fr",
  backgroundColor: "rgba(0,0,0,1)",
  padding: "20px 10px",
});

export const StyledChatGptchat = styled("div", {
  position: "relative",
  display: "grid",
  height: "100vh",
  backgroundColor: "rgba(52,53,65,1)",
  padding: "32px",

  variants: {
    emptyChat: {
      true: {
        gridTemplateRows: "8fr 2fr 2fr .5fr",
      },
      false: {
        gridTemplateRows: "11fr 2.5fr 0.5fr",
      },
    },
  },
});
