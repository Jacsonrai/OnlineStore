"use client";
import React, { useState } from "react";
import { SearchIcon, CartIcon } from "@/app/components/shared/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { searchSuccess } from "@/app/redux/search/searchSlice";

import { drawerSuccess } from "@/app/redux/drawer/drawerSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleClick = () => {
    if (search === "") {
      router.push("/");
    } else {
      dispatch(searchSuccess(search));
      router.push("/search");
    }
  };
  const handleOpenDrawer = () => {
    dispatch(drawerSuccess(true));
  };
  return (
    <div className="flex shadow pb-2 justify-between pr-4 pl-4 md:pr-2 md:pl-2 xl:pl-32 xl:pr-32 pt-4 items-center">
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
            onClick={handleClick}
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
        <span className="flex items-center gap-2">
          <button>
            <CartIcon height="30px" width="30px" color="#FF385C" />
          </button>

          <p>0</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
