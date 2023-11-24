import { ArrowUp } from "@/components/ui";
import { IdeaProps } from "./idea.props";
import { StyledIdea, StyledIdeaContainer, StyledTitle } from "./idea.styles";

const Idea = ({ title, idea }: IdeaProps) => {
  return (
    <StyledIdeaContainer>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledIdea>{idea}</StyledIdea>
      </div>
      <ArrowUp />
    </StyledIdeaContainer>
  );
};
export default Idea;
