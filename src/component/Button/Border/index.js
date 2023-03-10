import clsx from "classnames";

export default function Component(props) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded",
        {
          "bg-secondary border border-primary text-primary":
            !props?.variant || props?.variant === "primary",
        },
        props?.className
      )}
      onClick={props?.onClick}
    >
      {props?.children}
    </div>
  );
}
