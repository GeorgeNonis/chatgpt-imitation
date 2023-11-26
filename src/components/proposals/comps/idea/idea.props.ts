export type IdeaI = {
  title: string;
  idea: string;
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
};
