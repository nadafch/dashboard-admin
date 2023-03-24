import React, { useState } from "react";
import { HiOutlineViewList, HiLogout } from "react-icons/hi";
import * as COMPONENT from "@Components/index";

export default function Component(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const Modal = () => {
    return (
      <div className="w-full max-w-[200px] bg-white border absolute  right-5 mt-5 lg:mt-14 p-3 rounded-lg shadow-lg ">
        <div
          role="button"
          className="flex justify-center items-center gap-2 text-sm"
        >
          <HiLogout />
          logout
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white lg:max-h-16 shadow-sm lg:flex justify-between p-3 sticky top-0">
      <div
        className="flex items-center text-xl text-stone-600 mb-5 lg:mb-0"
        onClick={props?.onClick}
      >
        <HiOutlineViewList />
      </div>
      <div className="w-full lg:max-w-[90%] flex justify-between gap-4 items-center">
        <div className="w-full lg:max-w-[400px]">
          <COMPONENT.Search />
        </div>
        <div className="flex text-end gap-3 ">
          <div className="text-stone-700 text-end p-1 hidden lg:block">
            <h2 className="text-sm font-semibold">Hi! Josh</h2>
            <p className="text-[10px]">Sunday, 12 March 2023</p>
          </div>
          <div
            className="w-10 h-10 rounded-full bg-stone-500 "
            onClick={() => setOpenMenu(!openMenu)}
          ></div>
        </div>
      </div>
      {openMenu && <Modal />}
    </div>
  );
}
