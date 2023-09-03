import { useQuery } from "react-query";
import { getAllCarts } from "@/app/api/methods";

const useGetCartHooks = () => {
  const cartQuery = useQuery("cart", getAllCarts);

  return {
    isSuccess: cartQuery.isSuccess,
    isLoading: cartQuery.isLoading,
    isError: cartQuery.isError,
    cartData: cartQuery.data,
  };
};
export { useGetCartHooks };
