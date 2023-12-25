import { axiosServerInstance } from "./axios";
import { UpdateConvDTO } from "./services.types";

export const updateConv = async ({ id, messages }: UpdateConvDTO) => {
  const result = axiosServerInstance.put(`${id}`, { ...messages });

  return result;
};
