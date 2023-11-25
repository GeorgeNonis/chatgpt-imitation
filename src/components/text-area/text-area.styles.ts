import { styled } from "@stitches/react";

export const StyledTextArea = styled("div", {
  display: "grid",
  gridTemplateColumns: "11fr 1fr",
  border: "1px solid gray",
  borderRadius: "8px",
  width: 800,
  minHeight: 60,
  marginInline: "auto",
  padding: "20px 20px",
});
export const StyledWarning = styled("h3", {
  paddingTop: "10px",
  color: "#b7b7b7",
  textAlign: "center",
  fontSize: ".75rem",
  fontWeight: "400",
});

export const StyledInput = styled("textarea", {
  background: "unset",
  border: "unset",
  outline: "unset",
  color: "white",
  overflowY: "auto",
  lineHeight: "1.5",
  resize: "unset",
});

export const StyledButton = styled("button", {
  cursor: "pointer",
  height: 30,
  width: 30,
});
