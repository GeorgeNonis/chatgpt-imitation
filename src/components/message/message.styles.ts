import { styled } from "@stitches/react";

export const StyledChat = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 11fr",
  width: "50%",
  marginInline: "auto",
});

export const StyledChatWrapper = styled("div", {
  marginBottom: 24,
});

export const StyledText = styled("h3", {
  fontSize: "1rem",
  fontWeight: 600,
  color: "white",
});

export const StyledTextWrapper = styled("div", {
  display: "grid",
});

export const StyledTypeWriterWrapper = styled("div", {
  color: "white !important",
  paddingTop: 10,
});
