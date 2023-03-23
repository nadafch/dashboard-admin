import React from "react";

export default function Component(props) {
  return (
    <div className="group relative flex">
      {props?.children}
      <span className="w-max absolute left-9 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {props?.message}
      </span>
    </div>
  );
}
