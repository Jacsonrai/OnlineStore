"use client";
import React, { useState } from "react";

import { CategoryCard, ProductCard } from "@/app/components/shared/card";

const HomeLayout = (props: any) => {
  const { categoryData = [] } = props;
  const handleCategoryClick = (data: any) => {
    setCategoryIndex(data);
  };
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <main className="lg:pr-32 lg:pl-32">
      <div className="mt-2 md:mt-6">
        <h4 className="text-xl pl-4 lg:pl-6 capitalize tracking-wide font-semibold text-dark-black">
          categories
        </h4>
        <div className=" pb-4 pt-2 ml-6 sm:ml-0 flex items-center gap-2 overflow-x-auto">
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

      <div className="mt-6 flex gap-10 md:gap-10 lg:gap-5 xl:gap-8 flex-wrap justify-center md:pl-6 pb-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default HomeLayout;
