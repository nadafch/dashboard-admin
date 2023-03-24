import React from "react";
import * as COMPONENT from "@Components/index";
import * as icon from "@Configs/icon";

export default function Pages() {
  const variant = ["primary", "secondary", "danger"];
  return (
    <>
      <div className="bg-white rounded-lg m-3 p-3">
        <div className="p-3 border-b">
          <h1 className="text-lg font-medium">Normal Button</h1>
        </div>
        {variant.map((variant) => (
          <div className="grid grid-cols-2 gap-3">
            <div className="mt-5 flex items-center gap-4 mx-auto">
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled variant={variant} size="sm">
                  Button
                </COMPONENT.BtnFilled>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled variant={variant}>
                  Button
                </COMPONENT.BtnFilled>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled variant={variant} size="lg">
                  Button
                </COMPONENT.BtnFilled>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 mx-auto">
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined variant={variant} size="sm">
                  Button
                </COMPONENT.BtnOutlined>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined variant={variant}>
                  Button
                </COMPONENT.BtnOutlined>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined variant={variant} size="lg">
                  Button
                </COMPONENT.BtnOutlined>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg m-3 p-3">
        <div className="p-3 border-b">
          <h1 className="text-lg font-medium">Icon Button</h1>
        </div>
        {variant.map((variant) => (
          <div className="grid grid-cols-2 gap-3">
            <div className="mt-5 flex items-center gap-4 mx-auto">
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled
                  variant={variant}
                  icon={<icon.Button />}
                  size="sm"
                >
                  Button
                </COMPONENT.BtnFilled>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled variant={variant} icon={<icon.Button />}>
                  Button
                </COMPONENT.BtnFilled>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnFilled
                  variant={variant}
                  size="lg"
                  icon={<icon.Button />}
                >
                  Button
                </COMPONENT.BtnFilled>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 mx-auto">
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined
                  variant={variant}
                  size="sm"
                  icon={<icon.Button />}
                >
                  Button
                </COMPONENT.BtnOutlined>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined variant={variant} icon={<icon.Button />}>
                  Button
                </COMPONENT.BtnOutlined>
              </div>
              <div className="w-full max-w-fit">
                <COMPONENT.BtnOutlined
                  variant={variant}
                  size="lg"
                  icon={<icon.Button />}
                >
                  Button
                </COMPONENT.BtnOutlined>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
