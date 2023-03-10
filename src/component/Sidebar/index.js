import React from "react";
import clsx from "classnames";
import * as svgs from "@Configs/svgs";
import * as icon from "@Configs/icon";

export default function Component(props) {
  const menus = [
    {
      label: "Menu",
      asPath: "",
      icon: <icon.iconMenu />,
    },
    {
      label: "Order List",
      asPath: "",
    },
    {
      label: "History",
      asPath: "",
    },
    {
      label: "Bills",
      asPath: "",
    },
  ];

  return (
    <div
      className={clsx(
        "w-full min-h-screen rounded-r-lg bg-white shadow-xl p-3 text-stone-500 transition-all",
        props?.isExtended ? "max-w-[180px]" : "max-w-[70px]"
      )}
    >
      <div
        className={clsx("w-full max-w-[100px] mx-auto mb-6 mt-1", {
          "max-w-[80px]": props?.isExtended,
        })}
      >
        <img
          src={props?.isExtended ? svgs.logo : svgs.miniLogo}
          className={clsx({ "max-w-[80%] mx-auto": !props?.isExtended })}
          alt=""
        />
      </div>
      <div className="p-2 text-sm flex flex-col">
        {menus.map((index) => (
          <div className="flex gap-2 ">
            <div
              className={clsx("text-xl", {
                "text-[30px] text-center": !props?.isExtended,
              })}
            >
              {index.icon}
            </div>
            <div
              className={clsx("w-full mb-4", { hidden: !props?.isExtended })}
              role="button"
              onClick={() => {}}
            >
              {index.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
