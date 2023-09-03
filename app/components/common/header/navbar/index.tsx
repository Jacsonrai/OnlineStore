"use client";
import React, { useState, useEffect } from "react";
import { SearchIcon, CartIcon } from "@/app/components/shared/icons";
import Link from "next/link";
import {
  cartSuccess,
  cartFailure,
  cartLoading,
} from "@/app/redux/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { searchSuccess } from "@/app/redux/search/searchSlice";
import { drawerSuccess } from "@/app/redux/drawer/drawerSlice";
import { useGetCartHooks } from "@/app/hooks/cartsHooks/useCartsHook";

// Define the type for the data inside cartData

// Define the CartData interface
interface CartData {
  cartData: any;
  isLoading: any;
  isError: any;
}

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartProduct = useSelector((state: any) => state.cart.data);
  const [search, setSearch] = useState("");

  const { cartData, isLoading, isError }: CartData = useGetCartHooks();

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
  useEffect(() => {
    if (cartData) {
      dispatch(cartLoading(false));

      cartData.data.length > 0 &&
        cartData.data.filter((each: any) => {
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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (search === "") {
      router.push("/");
    } else {
      dispatch(searchSuccess(search));
      // router.replace("/search", { scroll: false });
    }
  };
  useEffect(() => {
    router.replace("/search", { scroll: false });
  }, [search]);
  const handleOpenDrawer = () => {
    dispatch(drawerSuccess(true));
  };
  return (
    <div
      className={`flex ${
        scrollHeight >= 19 && "fixed top-0 bg-white w-full"
      }  sm:relative shadow pb-2 justify-between pr-4 pl-4 md:pr-4 md:pl-4 xl:pl-32 xl:pr-32 pt-4 items-center`}
    >
      <div>
        <Link href={"/"}>
          <span className="flex items-center gap-1">
            <h4 className="md:text-5xl text-3xl font-medium capitalize text-pale-orange">
              OS
            </h4>
            <p className="text-pale-orange text-sm md:text-xl leading-relaxed capitalize">
              online store
            </p>
          </span>
        </Link>
      </div>
      <div className="w-1/2 hidden md:block">
        <div className=" flex items-center border-2 border-pale-gray w-full  rounded-lg p-1">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none text-lg text-pale-black  w-full  pl-2"
          />
          <button
            className="hover:bg-light-orange rounded-lg"
            onClick={(e) => handleClick(e)}
          >
            <SearchIcon width="40px" height="40px" color="#FF385C" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-10">
        <span className="md:flex items-center gap-2 hidden">
          <h4 className="text-lg text-pale-orange cursor-pointer hover:text-pale-gray">
            Login
          </h4>
          <h4 className="text-lg text-pale-orange cursor-pointer hover:text-pale-gray">
            sign up
          </h4>
        </span>
        <button
          className="hover:bg-light-orange rounded-lg md:hidden"
          onClick={handleOpenDrawer}
        >
          <SearchIcon width="40px" height="40px" color="#FF385C" />
        </button>
        <Link href={"/cart"}>
          <span className="flex">
            <button>
              <CartIcon height="30px" width="30px" color="#FF385C" />
            </button>

            <p className="text-pale-orange text-lg font-semibold">
              {cartProduct.length > 0 ? cartProduct.length : 0}
            </p>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
