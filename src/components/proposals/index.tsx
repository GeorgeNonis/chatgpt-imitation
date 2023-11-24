import { IDEAS } from "../../../config";
import { shuffle } from "../../../utils";
import Idea from "./comps/idea";
import { StyledProposals } from "./proposals.styles";

const Proposals = () => {
  return (
    <StyledProposals>
      {shuffle(IDEAS)
        .slice(0, 4)
        .map(({ idea, title }, index) => {
          return <Idea title={title} idea={idea} key={index} />;
        })}
    </StyledProposals>
  );
};
export default Proposals;
