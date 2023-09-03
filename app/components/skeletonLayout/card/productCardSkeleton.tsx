import React from "react";
import Skeleton from "react-loading-skeleton";

type prodcutSkeletonProps = {
  prodcutLength: number;
};

const ProductCardSkeleton = ({ prodcutLength }: prodcutSkeletonProps) => {
  return Array(prodcutLength)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="shadow  max-w-[22rem] min-h-[22rem] lg:max-w-[15rem]   flex  flex-col "
      >
        <figure className="">
          <Skeleton
            width={150}
            height={100}
            className="min-w-[20rem] max-w-[20rem] lg:max-w-[15rem] lg:min-w-[15rem] min-h-[15rem]"
          />
        </figure>
        <div className="pt-2 pl-2">
          <h4>
            <Skeleton width="200px" />
          </h4>
          <p>
            <Skeleton width="200px" />
          </p>
        </div>
      </div>
    ));
};

export default ProductCardSkeleton;
