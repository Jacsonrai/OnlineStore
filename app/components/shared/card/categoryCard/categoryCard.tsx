"use client";
import React, { ReactNode } from "react";
import { SearchIcon } from "@/app/components/shared/icons";
type categoryCardProps = {
  iconComponent: ReactNode;
  categoryName: string;
  hanldeCategory: any;
  indexs: any;
  categoryIndex: any;
};
const CategoryCard: React.FC<categoryCardProps> = ({
  iconComponent,
  categoryName,
  hanldeCategory,
  indexs,
  categoryIndex,
}) => {
  const hanldeClick = (data: string) => {
    hanldeCategory(data);
  };

  return (
    <div
      onClick={() => hanldeClick(indexs)}
      className="flex items-center flex-col min-w-[8rem]  cursor-pointer hover:text-pale-orange"
    >
      <button>{iconComponent}</button>
      <p
        className={`text-sm capitalize ${
          indexs === categoryIndex && `border-b-2 border-pale-orange pb-2`
        } `}
      >
        {categoryName}
      </p>
    </div>
  );
};
export default CategoryCard;
