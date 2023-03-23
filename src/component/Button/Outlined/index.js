import clsx from "classnames";

export default function Component(props) {
  return (
    <div
      role="button"
      className={clsx(
        "flex items-center justify-center py-2 px-3 rounded-lg  border",
        {
          " border-primary bg-secondary text-primary":
            !props?.variant || props?.variant === "primary",
          "border-danger text-danger bg-danger bg-opacity-10":
            props?.variant === "danger",
          "border-amber-300 text-amber-400 bg-amber-300 bg-opacity-20":
            props?.variant === "secondary",
        },
        {
          "text-sm": props?.size === "sm",
          "text-lg": props?.size === "lg",
        },
        props?.className
      )}
      onClick={props?.onClick}
    >
      {props?.children}
    </div>
  );
}
