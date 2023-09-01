import { LoginIcon, SearchIcon, CartIcon } from "@/app/components/shared/icons";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex bg-white w-screen pt-2 pb-3 border-t border-pale-gray justify-center gap-10">
      <div className="flex flex-col items-center">
        <div>
          <SearchIcon width="25px" height="25px" color="gray" />
        </div>
        <p className="text-xs text-slate-800 ">Explore</p>
      </div>

      <div className="flex flex-col items-center">
        <span>
          <CartIcon width="25px" height="25px" color="gray" />
        </span>
        <p className="text-xs text-slate-800">Carts</p>
      </div>

      <div className="flex flex-col items-center">
        <span>
          <LoginIcon width="25px" height="25px" color="gray" />
        </span>
        <p className="text-xs text-slate-800">Log in</p>
      </div>
    </div>
  );
};

export default AppBar;
