import { useQuery } from "react-query";
import { getAllCategory } from "@/app/api/methods";

const useGetCategoryHooks = () => {
  const categoryQuery = useQuery("category", getAllCategory);

  return {
    isSuccess: categoryQuery.isSuccess,
    isLoading: categoryQuery.isLoading,
    isError: categoryQuery.isError,
    categoryData: categoryQuery.data,
  };
};
export { useGetCategoryHooks };
