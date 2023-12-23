import { axiosServerInstance } from "./axios";

export const getHistory = async () => {
  try {
    const response = await axiosServerInstance("");

    return response.data;
  } catch (error) {
    return error;
  }
};

export const getConversation = async ({}: { id: string }) => {
  try {
    const response = await axiosServerInstance("");

    return response.data;
  } catch (error) {
    return error;
  }
};
