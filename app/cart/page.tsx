"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartLayout from "../components/layout/cart/cartLayout";
import { useGetCartHooks } from "@/app/hooks/cartsHooks/useCartsHook";
import {
  cartSuccess,
  cartFailure,
  cartLoading,
} from "@/app/redux/cart/cartSlice";
interface CartData {
  cartData: any;
  isLoading: any;
  isError: any;
}
const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state: any) => state.cart.data);
  const { cartData, isLoading, isError }: CartData = useGetCartHooks();

  useEffect(() => {
    if (cartData) {
      dispatch(cartLoading(false));
      cartData?.data.length > 0 &&
        cartData?.data.filter((each: any) => {
          if (each.userId === 1) {
            dispatch(cartSuccess(each.products));
          }
        });
    }
    if (isLoading) {
      dispatch(cartLoading(true));
      dispatch(cartFailure(false));
    }
    if (isError) {
      dispatch(cartLoading(false));
      dispatch(cartFailure(isError));
    }
  }, [dispatch, cartData, isLoading, isError]);
  return <CartLayout cartItem={cartProduct && cartProduct} />;
};

export default Cart;
