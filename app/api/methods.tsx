import { endpoints } from "./endpoints";
import BaseApi from "./baseApi";

export const getAllCategory = async () => {
  const response = await BaseApi.get(endpoints.getAllCategory);
  return response;
};
