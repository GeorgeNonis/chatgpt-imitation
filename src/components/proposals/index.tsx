import { IDEAS } from "../../../config";
import { useAppContext } from "../../../context";
import Idea from "./comps/idea";
import { StyledProposals } from "./proposals.styles";

const Proposals = () => {
  const { sendQuestionHandler } = useAppContext();
  return (
    <StyledProposals>
      {IDEAS.slice(0, 4).map(({ idea, title }, index) => {
        const msg = `${title} ${idea}`;
        return (
          <Idea
            title={title}
            idea={idea}
            key={index}
            onClick={() => sendQuestionHandler({ value: msg })}
          />
        );
      })}
    </StyledProposals>
  );
};
export default Proposals;
