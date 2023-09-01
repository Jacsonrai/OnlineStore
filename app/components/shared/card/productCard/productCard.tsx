import React from "react";
import Image from "next/image";
import Jeans from "@/app/assets/jeans.jpg";
const ProductCard = () => {
  return (
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
          Portable Rechargeable Usb Mini Fan With 3 Speed And a Stand Portable
          Rechargeable Usb Mini Fan With 3 Speed And a Stand Portable
          Rechargeable Usb Mini Fan With 3 Speed And a Stand
        </h4>
        <p className="text-pale-orange font-medium text-lg">Rs.1200</p>
      </span>
    </div>
  );
};

export default ProductCard;
