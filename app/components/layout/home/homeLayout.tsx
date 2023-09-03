"use client";
import React, { useState, useEffect } from "react";

import { CategoryCard, ProductCard } from "@/app/components/shared/card";
import {
  ProductCardSkeleton,
  CategoryCardSkeleton,
} from "@/app/components/skeletonLayout/";

const HomeLayout = (props: any) => {
  const {
    categoryData = [],
    productData = [],
    prodcutLoading,
    categoryLoading,
  } = props;
  const handleCategoryClick = (data: any, name: string) => {
    setCategoryIndex(data);
    setCategoryName(name);
  };

  const [categoryIndex, setCategoryIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("electronics");
  const [scrollHeight, setScrollHeight] = useState(0);

  // Attach a scroll event listener when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // Get the vertical scroll position of the window
      const currentScrollHeight = window.scrollY;
      setScrollHeight(currentScrollHeight);
    };

    // Attach the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="xl:pr-32 xl:pl-32 md:pl-4 md:pr-4 ">
      <div className="mt-2 md:mt-6">
        <h4 className="text-xl capitalize pl-4 tracking-wide font-semibold text-dark-black">
          categories
        </h4>
        <div
          className={`${
            scrollHeight >= 20
              ? `fixed pb-0 top-[55px] sm:top-0 flex gap-6 overflow-x-auto pt-4 sm:pl-0 shadow w-full bg-white ml-0 pl-2`
              : `pb-4 pt-4 sm:pl-6 pr-2 sm:ml-0 flex ml-6 gap-6 overflow-x-auto`
          }`}
        >
          {categoryLoading ? (
            <CategoryCardSkeleton categoryLength={4} />
          ) : (
            categoryData.length > 0 &&
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
            ))
          )}
        </div>
      </div>
      {prodcutLoading ? (
        <div className="mt-6 flex gap-10 md:gap-10 lg:gap-20  flex-wrap justify-center lg:justify-normal md:pl-6 lg:pl-0 pb-20">
          <ProductCardSkeleton prodcutLength={6} />
        </div>
      ) : (
        <div className="mt-6 flex gap-10 md:gap-10 lg:gap-20  flex-wrap justify-center lg:justify-normal md:pl-6 lg:pl-0 pb-20">
          {productData.length > 0 &&
            productData.map(
              (each: any, i: number) =>
                each.category === categoryName && (
                  <div key={i}>
                    <ProductCard
                      id={each.id}
                      image={each.image}
                      title={each.title}
                      price={each.price}
                    />
                  </div>
                )
            )}
          {/* <ProductCardSkeleton prodcutLength={2} /> */}
        </div>
      )}
    </main>
  );
};

export default HomeLayout;
