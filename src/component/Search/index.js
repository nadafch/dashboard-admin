import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function Component(props) {
  const { onChange } = props;

  return (
    <div className="w-full grid grid-cols-1 text-sm ">
      <div className="flex relative items-center">
        <input
          className="w-full outline-none rounded-full p-2 px-4 border border-[#CFCFCF]"
          placeholder="Search"
          onChange={(e) => {
            e.preventDefault();
            onChange(e.target.value);
          }}
          value={props?.value}
        />
        <div className="w-5 text-xl absolute right-0 text-stone-700 mr-1">
          <BiSearchAlt />
        </div>
      </div>
    </div>
  );
}
