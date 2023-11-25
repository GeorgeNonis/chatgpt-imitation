import Image from "next/image";
import { StyledText, StyledUser } from "./user.styles";
import { UserI } from "./user.types";

const User = ({
  src,
  height = 20,
  width = 20,
  alt = "user image",
  user,
}: UserI) => {
  return (
    <StyledUser>
      <Image width={width} height={height} src={src} alt={alt} />
      <StyledText>{user}</StyledText>
    </StyledUser>
  );
};
export default User;
