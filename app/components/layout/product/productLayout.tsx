import React, { ReactNode } from "react";
import Image from "next/image";
import jeans from "@/app/assets/jeans.jpg";
type productLayputProps = {
  productData: {
    title: string;
    price: number;
    image: string;
    description: string;
  };
};
const ProductLayout: React.FC<productLayputProps> = ({ productData }) => {
  return (
    <div className="lg:pl-32 lg:pr-32 p-2">
      <div className="mt-1 md:mt-10 flex shadow-slate-300  justify-center gap-10 pb-20 shadow rounded-md flex-wrap p-10 md:grid md:grid-cols-2 xl:grid-cols-3 ">
        <div className="">
          <figure className="text-whote ">
            <Image
              src={productData?.image}
              alt=""
              width={400}
              height={400}
              className="rounded-lg 
              min-w-[20rem] 
              max-w-[20rem] 
              min-h-[20rem] 
              max-h-[20rem]
              
              "
            />
          </figure>
        </div>
        <div className="w-[20rem]">
          <div>
            <h4 className="text-lg capitalize">{productData?.title}</h4>
            <p className="text-pale-orange text-3xl pt-4">
              Rs.{productData?.price}
            </p>
          </div>
          <div className="flex gap-10 items-center pt-8">
            <button className="text-lg capitalize border min-w-[7rem] p-2 bg-pale-orange font-semibold text-white rounded-md">
              buy now
            </button>
            <button className="text-lg capitalize border min-w-[9rem] p-2 bg-purple-950 font-semibold text-white rounded-md">
              add to cart
            </button>
          </div>
        </div>
        <div className="w-[25rem] md:w-[22rem]">
          <div>
            <h4>{productData?.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
