import { styled } from "@stitches/react";
import Image from "next/image";

export const StyledUser = styled("div", {
  display: "grid",
  width: "fit-content",
});

export const StyledImage = styled(Image, {
  borderRadius: "50%",
});
