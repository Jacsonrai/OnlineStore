import { useQuery } from "react-query";
import { getAllProduct } from "@/app/api/methods";

const useGetProductHooks = () => {
  const productQuery = useQuery("product", getAllProduct);

  return {
    isSuccess: productQuery.isSuccess,
    isLoading: productQuery.isLoading,
    isError: productQuery.isError,
    productData: productQuery.data,
  };
};
export { useGetProductHooks };
