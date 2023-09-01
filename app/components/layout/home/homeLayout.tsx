"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CategoryCard } from "@/app/components/shared/card";
import Jeans from "@/app/assets/jeans.jpg";

const HomeLayout = (props: any) => {
  const { categoryData = [] } = props;
  const handleCategoryClick = (data: any) => {
    setCategoryIndex(data);
  };
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <main className="lg:pr-32 lg:pl-32">
      <div className="mt-2 md:mt-6">
        <h4 className="text-xl pl-4 lg:pl-0 capitalize tracking-wide font-semibold text-dark-black">
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

      <div className="mt-6 flex gap-10 flex-wrap justify-center md:justify-normal md:pl-6 pb-6">
        <div className="hover:shadow max-w-[20rem] lg:max-w-[15rem]  flex items-center flex-col cursor-pointer hover:rounded-bl-xl hover:rounded-br-xl duration-500 ease-in-out">
          <figure>
            <Image
              src={Jeans}
              alt=""
              width={200}
              className="bg-dark-black object-fill min-w-[20rem] max-w-[20rem] lg:max-w-[15rem] lg:min-w-[15rem] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl hover:rounded-bl-none hover:rounded-br-none"
            />
          </figure>
          <span className="p-2">
            <h4 className="line-clamp-2">
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
            </h4>
            <p className="text-pale-orange font-medium text-lg">Rs.1200</p>
          </span>
        </div>
        <div className="hover:shadow max-w-[20rem] lg:max-w-[15rem]  flex items-center flex-col cursor-pointer hover:rounded-bl-xl hover:rounded-br-xl duration-500 ease-in-out">
          <figure>
            <Image
              src={Jeans}
              alt=""
              width={200}
              className="bg-dark-black object-fill min-w-[20rem] max-w-[20rem] lg:max-w-[15rem] lg:min-w-[15rem] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl hover:rounded-bl-none hover:rounded-br-none"
            />
          </figure>
          <span className="p-2">
            <h4 className="line-clamp-2">
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
              Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand
            </h4>
            <p className="text-pale-orange font-medium text-lg">Rs.1200</p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
