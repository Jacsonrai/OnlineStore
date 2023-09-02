"use client";
import React, { ReactNode } from "react";
import { SearchIcon, LoginIcon, CartIcon } from "@/app/components/shared/icons";
type categoryCardProps = {
  iconComponent: ReactNode;
  categoryName: string;
  hanldeCategory: any;
  indexs: any;
  categoryIndex: any;
};
const CategoryCard: React.FC<categoryCardProps> = ({
  categoryName,
  hanldeCategory,
  indexs,
  categoryIndex,
}) => {
  const hanldeClick = (data: string, name: string) => {
    hanldeCategory(data, name);
  };

  return (
    <div
      onClick={() => hanldeClick(indexs, categoryName)}
      className="cursor-pointer hover:text-pale-orange text-center"
    >
      <p
        className={`text-sm capitalize inline-block whitespace-nowrap ${
          indexs === categoryIndex &&
          `border-b-2 border-pale-orange pb-2 text-pale-orange`
        } pb-2 `}
      >
        {categoryName}
      </p>
    </div>
  );
};
export default CategoryCard;

// export const CategoryIcon = ({ data }: any) => {
//   switch (data) {
//     case 0:
//       return <SearchIcon height="35px" width="30px" color="gray" />;
//       break;
//     case 1:
//       return <CartIcon height="30px" width="30px" color="gray" />;
//       break;
//     case 2:
//       return <LoginIcon height="30px" width="30px" color="gray" />;
//       break;
//     case 3:
//       return <LoginIcon height="30px" width="30px" color="gray" />;
//       break;
//     default:
//       <SearchIcon height="30px" width="30px" color="gray" />;
//   }
// };
