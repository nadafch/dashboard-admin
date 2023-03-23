import clsx from "classnames";

export default function Component(props) {
  return (
    <div
      role="button"
      className={clsx(
        "flex items-center justify-center border-none  text-white py-2 px-3 rounded-lg",
        {
          "bg-primary": !props?.variant || props?.variant === "primary",
          "bg-danger": props?.variant === "danger",
          "bg-amber-300": props?.variant === "secondary",
        },
        {
          "text-sm": props?.size === "sm",
          "text-lg": props?.size === "lg",
        },
        props?.className
      )}
      onClick={props?.onClick}
    >
      {props?.icon && <span className="mr-2">{props?.icon}</span>}
      {props?.children}
    </div>
  );
}
