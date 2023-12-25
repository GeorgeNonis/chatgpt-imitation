import { axiosServerInstance } from "./axios";
import { UpdateConvDTO } from "./services.types";

export const updateConv = async ({ id, messages }: UpdateConvDTO) => {
  console.log({ id, messages });
  const result = axiosServerInstance.patch(`conversations/${id}`, {
    messages: [...messages],
  });
  console.log({ result });
  return result;
};
