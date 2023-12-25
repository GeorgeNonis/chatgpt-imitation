import { ConvI } from "../context/app/app.types";

export interface SendQuestionI {
  value: string;
}

export interface UpdateConvDTO {
  id: string;
  messages: ConvI[];
}
