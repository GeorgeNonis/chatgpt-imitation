import { styled } from "@stitches/react";

export const StyledMain = styled("main", {
  display: "grid",
  gridTemplateColumns: "1.5fr 10.5fr",
  height: "100vh",
  backgroundColor: "red",
});

export const StyledSideBar = styled("div", {
  backgroundColor: "rgba(0,0,0,1)",
});

export const StyledChatGptchat = styled("div", {
  display: "grid",
  height: "100vh",
  backgroundColor: "rgba(52,53,65,1)",
  padding: "32px",

  variants: {
    emptyChat: {
      true: {
        gridTemplateRows: "11fr 1fr",
      },
      false: {
        gridTemplateRows: "11fr 1fr",
      },
    },
  },
});
