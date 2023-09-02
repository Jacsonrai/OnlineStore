import React from "react";
import Image from "next/image";
import Jeans from "@/app/assets/jeans.jpg";
type productCardProps = {
  image: string;
  title: string;
  price: number;
};
const ProductCard: React.FC<productCardProps> = ({ image, title, price }) => {
  return (
    <div className="hover:shadow  max-w-[22rem] min-h-[22rem] lg:max-w-[15rem]   flex  flex-col cursor-pointer hover:rounded-bl-xl hover:rounded-br-xl duration-500 ease-in-out">
      <figure className="">
        <Image
          src={image}
          alt=""
          width={150}
          height={100}
          style={{ maxHeight: "15rem", minHeight: "15rem" }}
          className="bg-dark-black object-fill min-w-[20rem] max-w-[20rem] lg:max-w-[15rem] lg:min-w-[15rem] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl hover:rounded-bl-none hover:rounded-br-none"
        />
      </figure>
      <span className="p-2">
        <h4 className="line-clamp-2">{title}</h4>
        <p className="text-pale-orange font-medium text-lg">Rs.${price}</p>
      </span>
    </div>
  );
};

export default ProductCard;
