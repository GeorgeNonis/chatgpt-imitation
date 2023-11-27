export interface TextAreaI {
  sendQuestionHandler: ({ value }: { value: string }) => Promise<void>;
  isLoading: boolean;
  ["data-testid"]?: string;
}
export type UseTextAreaI = Pick<TextAreaI, "sendQuestionHandler">;
