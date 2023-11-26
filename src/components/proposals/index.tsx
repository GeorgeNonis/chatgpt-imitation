import { IDEAS } from "../../../config";
import { useService } from "../../../hooks";
import Idea from "./comps/idea";
import { StyledProposals } from "./proposals.styles";

const Proposals = () => {
  const { sendQuestionHandler } = useService();
  return (
    <StyledProposals>
      {IDEAS.slice(0, 4).map(({ idea, title }, index) => {
        return (
          <Idea
            title={title}
            idea={idea}
            key={index}
            sendQuestionHandler={sendQuestionHandler}
          />
        );
      })}
    </StyledProposals>
  );
};
export default Proposals;
