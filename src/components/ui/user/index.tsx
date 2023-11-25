import { StyledImage, StyledUser } from "./user.styles";
import { UserI } from "./user.types";

const User = ({ src, height = 30, width = 30, alt = "user image" }: UserI) => {
  return (
    <StyledUser>
      <StyledImage width={width} height={height} src={src} alt={alt} />
    </StyledUser>
  );
};
export default User;
