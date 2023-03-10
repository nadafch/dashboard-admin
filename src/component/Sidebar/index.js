import React from "react";
import clsx from "classnames";
import * as svgs from "@Configs/svgs";
import * as icon from "@Configs/icon";

export default function Component(props) {
  const menus = [
    {
      label: "Menu",
      asPath: "",
      icon: <icon.IconMenu />,
    },
    {
      label: "Order List",
      asPath: "",
      icon: <icon.Order />,
    },
    {
      label: "Bills",
      asPath: "",
      icon: <icon.Bill />,
    },
  ];

  return (
    <div
      className={clsx(
        "w-full min-h-screen rounded-r-lg bg-white shadow-xl p-3 text-stone-500 transition-all duration-300",
        props?.isExtended ? "max-w-[180px]" : "max-w-[70px]"
      )}
    >
      <div className={clsx("w-full max-w-[100px] mx-auto mb-6 mt-1")}>
        <img
          src={props?.isExtended ? svgs.logo : svgs.miniLogo}
          className={clsx({ "w-9": !props?.isExtended })}
          alt=""
        />
      </div>
      <div
        className={clsx("p-2 text-sm flex flex-col gap-3", {
          "gap-8 mt-10": !props?.isExtended,
        })}
      >
        {menus.map((index) => (
          <div
            className={clsx("w-full flex gap-4 relative items-center", {
              "ml-3": props?.isExtended,
            })}
            role="button"
            onClick={() => {}}
          >
            <div
              className={clsx(
                "w-full absolute right-0 border-r-8 border-emerald-700 inset-0 rounded-r-md",
                props?.isExtended
                  ? "bg-gradient-to-l from-emerald-600 to-white opacity-40"
                  : "ml-4"
              )}
            ></div>
            <div
              className={clsx("text-2xl relative", {
                "text-[25px] text-center": !props?.isExtended,
              })}
            >
              {index.icon}
            </div>
            <div
              className={clsx("py-3 relative", {
                hidden: !props?.isExtended,
              })}
            >
              {index.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
