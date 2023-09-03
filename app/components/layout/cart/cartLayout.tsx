"use client";
import React from "react";
import CartFilterDetails from "./cartFilterDetails";

const CartLayout = (props: any) => {
  const { cartItem } = props;

  return (
    <div className="lg:pr-32 lg:pl-32">
      <div className="pt-2 sm:pt-10">
        <h4 className="sm:text-center pl-2 text-lg sm:text-2xl font-semibold capitalize">
          Your cart({cartItem && cartItem.length} items)
        </h4>
        <div className="hidden sm:block sm:pt-10 sm:pl-10 sm:pr-10">
          <table className="w-full ">
            <thead className="text-left text-pale-black uppercase border-b border-pale-gray">
              <tr>
                <th className="w-6/12">Items</th>
                <th className="w-6/12">price</th>
                <th className="w-3/12">quantity</th>
              </tr>
            </thead>
            <tbody className="text-left ">
              {cartItem.length > 0 &&
                cartItem.map((each: any, i) => (
                  <tr className="border-b border-pale-gray" key={i}>
                    <td className="p-2  flex items-center gap-2">
                      <CartFilterDetails ids={each.productId} type="details" />
                    </td>
                    <td>
                      <CartFilterDetails ids={each.productId} type="price" />
                    </td>
                    <td>{each.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="sm:hidden duration-300 ease-in-out">
          {cartItem.length > 0 &&
            cartItem.map((each: any, i) => (
              <div
                key={i}
                className="flex items-center shadow gap-4 p-4 mt-2 ml-2 mr-2 mb-4"
              >
                <span className="flex items-center gap-2 w-48">
                  <CartFilterDetails ids={each.productId} type="details" />
                </span>
                <span className="w-48">
                  <p className="text-md capitalize text-pale-black">
                    price(Rs)
                  </p>
                  <p className="text-pale-orange font-semibold whitespace-nowrap">
                    <CartFilterDetails ids={each.productId} type="price" />
                  </p>
                </span>
                <span>
                  <p className="text-md capitalize text-pale-black">quantity</p>
                  <p className="text-xl font-bold text-pale-orange text-center">
                    {each.quantity}
                  </p>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
