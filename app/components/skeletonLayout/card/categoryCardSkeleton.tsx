import React from "react";
import Skeleton from "react-loading-skeleton";

type categoryCardSkeletonProps = {
  categoryLength: number;
};
const CategoryCardSkeleton = ({
  categoryLength,
}: categoryCardSkeletonProps) => {
  return Array(categoryLength)
    .fill(0)
    .map((_, i) => (
      <div key={i}>
        <p>
          <Skeleton width="100px" />
        </p>
      </div>
    ));
};

export default CategoryCardSkeleton;
