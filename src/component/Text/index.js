import React from "react";
import clsx from "classnames";

export default function Component(props) {
  return (
    <div
      className={clsx(
        {
          "text-white": props?.variant === "white",
          "text-primary": !props?.variant || props?.variant === "primary",
          "text-secondary": props?.variant === "secondary",
          "text-danger": props?.variant === "danger",
        },
        {
          "font-light": props?.type === "light",
          "font-semibold": props?.type === "semibold",
          "font-bold": props?.type === "bold",
        },
        props?.className ? props?.className : "text-base"
      )}
    >
      {props?.children}
    </div>
  );
}
