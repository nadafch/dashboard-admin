import * as COMPONENT from "@Components/index";
import clsx from "classnames";

export default function Component(props) {
  return (
    <COMPONENT.Text
      variant={props?.variant}
      type={props?.type}
      className={clsx("text-sm", props?.className)}
    >
      {props?.children}
    </COMPONENT.Text>
  );
}
