"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drawerClose } from "@/app/redux/drawer/drawerSlice";
import { CrossIcon } from "@/app/components/shared/icons";
import { useRouter } from "next/navigation";
import { searchSuccess } from "@/app/redux/search/searchSlice";

const Drawer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const open = useSelector((state: any) => state.drawer.open);
  const handleClose = () => {
    dispatch(drawerClose(false));
  };
  const [search, setSearch] = useState("");
  const handleClick = () => {
    if (search === "") {
      dispatch(drawerClose(false));
      router.push("/");
    } else {
      dispatch(searchSuccess(search));
      dispatch(drawerClose(false));
      router.push("/search");
    }
  };
  return (
    <div
      className={`${
        open
          ? "fixed z-50 top-0 right-0 bg-gray-50 shadow-md overflow-hidden duration-700 w-full h-full ease-in"
          : "fixed z-50 top-0 right-0 bg-gray-50  overflow-hidden duration-700 w-0 h-full ease-out"
      }`}
    >
      <div
        className={`pt-4 pl-2 opacity-0 duration-500 ease-in-out ${
          open && "opacity-100"
        }`}
      >
        <button onClick={handleClose}>
          <CrossIcon height="30px" width="30px" color="#FF385C" />
        </button>
      </div>
      <div
        className={`flex items-center flex-col gap-3 justify-center pl-4 opacity-0 duration-200 ease-in-out ${
          open && "opacity-100"
        } pr-4 pt-2`}
      >
        <input
          className="border text-lg p-2 outline-none w-full rounded-lg text-pale-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-pale-orange uppercase text-white pt-2 pb-2 pl-8 pr-8 rounded"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Drawer;
