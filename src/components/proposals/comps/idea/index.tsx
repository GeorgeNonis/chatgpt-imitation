import { ArrowUp, ToolTip } from "@/components/ui";
import { IdeaI } from "./idea.props";
import {
  StyledContent,
  StyledIdea,
  StyledIdeaContainer,
  StyledTitle,
} from "./idea.styles";
import { useState } from "react";

const Idea = ({ title, idea, ...props }: IdeaI) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledIdeaContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledIdea>{idea}</StyledIdea>
      </StyledContent>
      <ToolTip
        off={10}
        tooltip="Click to send"
        css={{
          position: "absolute",
          top: "50%",
          transform: `translateY(-50%)`,
          right: 0,
          paddingRight: 8,
          paddingLeft: 8,
          background:
            "linear-gradient(to left, rgb(189 189 189 / 5%), rgba(0, 0, 0, 0))",
          ...(isHovered
            ? { opacity: 1 }
            : {
                opacity: 0,
              }),
        }}
      >
        <ArrowUp />
      </ToolTip>
    </StyledIdeaContainer>
  );
};
export default Idea;
