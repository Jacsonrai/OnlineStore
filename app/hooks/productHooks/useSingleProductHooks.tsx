import { getProductDetails } from "@/app/api/methods";
import { useQuery } from "react-query";
const useSingleProductHooks = (id: any) => {
  const productQuery = useQuery(["productDetails", id], () =>
    getProductDetails(id)
  );

  return {
    isSuccess: productQuery.isSuccess,
    isLoading: productQuery.isLoading,
    isError: productQuery.isError,
    productDetails: productQuery.data || null,
  };
};
export { useSingleProductHooks };
