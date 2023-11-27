export interface TextAreaI {
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
  isLoading: boolean;
}
export type UseTextAreaI = Pick<TextAreaI, "sendQuestionHandler">;
