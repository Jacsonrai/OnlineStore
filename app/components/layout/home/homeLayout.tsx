"use client";
import React, { useState } from "react";

import { CategoryCard, ProductCard } from "@/app/components/shared/card";

const HomeLayout = (props: any) => {
  const { categoryData = [], productData = [] } = props;
  const handleCategoryClick = (data: any, name: string) => {
    setCategoryIndex(data);
    setCategoryName(name);
  };

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("electronics");

  return (
    <main className="lg:pr-32 lg:pl-32">
      <div className="mt-2 md:mt-6">
        <h4 className="text-xl pl-4 capitalize sm:pl-2 tracking-wide font-semibold text-dark-black">
          categories
        </h4>
        <div className=" pb-4 pt-4 ml-6  sm:pl-2 pr-2 sm:ml-0 flex items-center gap-6 overflow-x-auto">
          {categoryData.length > 0 &&
            categoryData.map((each: any, i: number) => (
              <div key={i}>
                <CategoryCard
                  indexs={i}
                  hanldeCategory={handleCategoryClick}
                  categoryName={each}
                  iconComponent={each.icon}
                  categoryIndex={categoryIndex}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mt-6 flex gap-10 md:gap-10 lg:gap-20  flex-wrap justify-center lg:justify-normal md:pl-6 lg:pl-0 pb-6">
        {productData.length > 0 &&
          productData.map(
            (each: any, i: number) =>
              each.category === categoryName && (
                <div key={i}>
                  <ProductCard
                    image={each.image}
                    title={each.title}
                    price={each.price}
                  />
                </div>
              )
          )}
      </div>
    </main>
  );
};

export default HomeLayout;
