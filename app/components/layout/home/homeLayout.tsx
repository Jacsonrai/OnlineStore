"use client";
import React, { useState } from "react";
import { CategoryCard } from "@/app/components/shared/card";

const HomeLayout = (props: any) => {
  const { categoryData = [] } = props;
  const handleCategoryClick = (data: any) => {
    setCategoryIndex(data);
  };
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <main className="lg:pr-32 lg:pl-32">
      <div className="mt-2 md:mt-6">
        <h4 className="text-xl pl-4 sm:pl-0 capitalize tracking-wide font-semibold text-dark-black">
          categories
        </h4>
        <div className=" pb-4 pt-2 flex items-center gap-2 overflow-x-auto">
          {categoryData.length > 0 &&
            categoryData.map((each: any, i: number) => (
              <div key={i}>
                <CategoryCard
                  indexs={i}
                  hanldeCategory={handleCategoryClick}
                  categoryName={each.name}
                  iconComponent={each.icon}
                  categoryIndex={categoryIndex}
                />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
