import { StyledImage, StyledUser } from "./user.styles";
import { UserI } from "./user.types";

const User = ({
  height = 40,
  width = 40,
  alt = "user image",
  user,
  ...props
}: UserI) => {
  const src = user === "You" ? "/me.jpg" : "/cat.png";
  return (
    <StyledUser {...props}>
      <StyledImage width={width} height={height} src={src} alt={alt} />
    </StyledUser>
  );
};
export default User;
