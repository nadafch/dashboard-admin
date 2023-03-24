import React, { useEffect, useState } from "react";
import clsx from "classnames";
import * as icon from "@Configs/icon";
import { useNavigate } from "react-router-dom";
import * as COMPONENT from "@Components/index";

export default function Component(props) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("");
  const [activeChild, setActiveChild] = useState("");
  const [isExtChild, setExtChild] = useState(false);

  const menus = [
    {
      label: "Dasboard",
      asPath: "",
      icon: <icon.Dashboard />,
    },
    {
      label: "Components",
      asPath: "components",
      icon: <icon.Component />,
      children: [
        {
          label: "Button",
          asPath: "button",
        },
        {
          label: "Tooltip",
          asPath: "tooltip",
        },
      ],
    },
    {
      label: "Form",
      asPath: "form",
      icon: <icon.Form />,
      children: [
        {
          label: "Form Element",
          asPath: "form-element",
        },
      ],
    },
  ];

  const onSelectMenu = (_menu) => {
    if (_menu.children) {
      setActiveMenu(_menu?.asPath);
    } else {
      navigate(`/${_menu?.asPath}`);
      setActiveMenu(_menu?.asPath);
    }
  };

  useEffect(() => {
    console.log(activeChild);
  }, [activeChild]);

  return (
    <div
      className={clsx(
        "w-full min-h-screen rounded-r-lg bg-white shadow-xl p-2 text-stone-500 transition-all duration-200 absolute z-10 md:static",
        props?.isExtended ? "max-w-[200px]" : "hidden md:block max-w-[60px]"
      )}
    >
      <div
        className="visible md:invisible sticky top-0 left-0"
        onClick={props?.onClick}
      >
        <icon.Back />
      </div>
      <div className="w-full max-w-[100px] mx-auto mb-6 mt-1 relative">
        {/* <img
          src={props?.isExtended ? svgs.logo : svgs.miniLogo}
          className={clsx({ "w-9": !props?.isExtended })}
          alt=""
        /> */}
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
            onClick={() => onSelectMenu(index)}
          >
            {activeMenu === index?.asPath ? (
              <div
                className={clsx(
                  "w-full max-h-11 absolute right-0 border-r-[6px] border-primary border-opacity-80 inset-0 rounded-r-md transition-all duration-200",
                  props?.isExtended
                    ? "bg-gradient-to-l from-primary/40 to-white "
                    : "ml-4"
                )}
              ></div>
            ) : null}
            {props?.isExtended ? (
              <div className="w-full">
                <div
                  className="flex items-center py-3 gap-2 relative hover:text-stone-700"
                  role="button"
                  onClick={() => {
                    setExtChild(!isExtChild);
                  }}
                >
                  <div className="text-xl">{index?.icon}</div>
                  <div>{index?.label}</div>

                  {index?.children?.length > 0 && props?.isExtended && (
                    <div
                      className={clsx(
                        "absolute right-2",
                        isExtChild &&
                          activeMenu === index?.asPath &&
                          "rotate-180 transition-all"
                      )}
                    >
                      <icon.ArrowDown />
                    </div>
                  )}
                </div>
                {index?.children?.map((_child, _idxChild) => (
                  <div
                    key={_idxChild}
                    role="button"
                    onClick={() => {
                      navigate(`${index?.asPath}/${_child.asPath}`);
                      setActiveChild(_child.asPath);
                    }}
                    className={clsx(
                      "flex items-center p-3 ml-5 transition-all",
                      isExtChild && activeMenu === index?.asPath
                        ? "block"
                        : "hidden"
                    )}
                  >
                    <div
                      className={clsx(
                        "flex items-center hover:text-stone-700",
                        activeMenu === index?.asPath &&
                          activeChild === _child?.asPath &&
                          "text-primary"
                      )}
                    >
                      {_child?.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <COMPONENT.Tooltip message={index?.label}>
                <div
                  className="w-full justify-center text-2xl text-center"
                  onClick={() => onSelectMenu(index)}
                >
                  {index?.icon}
                </div>
              </COMPONENT.Tooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
