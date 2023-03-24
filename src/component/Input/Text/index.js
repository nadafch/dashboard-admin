import * as COMPONENT from "@Components/index";
import clsx from "classnames";

export default function Component(props) {
  const { onChange } = props;

  return (
    <div className="flex flex-col gap-2">
      <COMPONENT.TextSM className="ml-1 text-stone-600">
        {props?.label}
        <span className="text-danger">{props?.isRequired && "*"}</span>
      </COMPONENT.TextSM>
      <input
        className={clsx(
          "w-full text-sm text-dark-grey p-3 border border-grey focus:outline-primary/30 rounded"
        )}
        placeholder={props?.placeholder}
        value={props?.value}
        onChange={(e) => {
          e.preventDefault();
          onChange(e?.target?.value);
        }}
        type={props.type}
        disabled={props?.disabled}
        autoComplete="true"
      />
    </div>
  );
}
