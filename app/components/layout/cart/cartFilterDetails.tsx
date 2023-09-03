import React from "react";
import { useSingleProductHooks } from "@/app/hooks/productHooks/useSingleProductHooks";
import Image from "next/image";
type cartFilterDetails = {
  ids: number;
  type: string;
};
const CartFilterDetails: React.FC<cartFilterDetails> = ({ ids, type }) => {
  const { productDetails, isLoading, isError } = useSingleProductHooks(
    ids && ids
  );

  return (
    <>
      {type === "details" && (
        <>
          <figure>
            <Image
              src={productDetails?.data.image}
              alt=""
              width="80"
              height="80"
              className="rounded-md max-w-[50px] min-w-[50px]"
            />
          </figure>
          <p className="line-clamp-2 sm:line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dignissimos quia architecto, minus consequuntur
          </p>
        </>
      )}
      {type === "price" && (
        <>
          <p>{productDetails?.data.price}</p>
        </>
      )}
    </>
  );
};

export default CartFilterDetails;
