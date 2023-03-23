import React from "react";
import * as COMPONENT from "@Components/index";

export default function Pages() {
  return (
    <>
      <div className="bg-white rounded-lg m-3 p-3">
        <div className="p-3 border-b">
          <h1 className="text-lg font-medium">Normal Button</h1>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="primary" size="sm">
                Button
              </COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="primary">
                Button
              </COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="primary" size="lg">
                Button
              </COMPONENT.BtnFilled>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="danger" size="sm">
                Button
              </COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="danger">Button</COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="danger" size="lg">
                Button
              </COMPONENT.BtnFilled>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="secondary" size="sm">
                Button
              </COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="secondary">
                Button
              </COMPONENT.BtnFilled>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnFilled variant="secondary" size="lg">
                Button
              </COMPONENT.BtnFilled>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="primary" size="sm">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="primary">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="primary" size="lg">
                Button
              </COMPONENT.BtnOutlined>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="danger" size="sm">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="danger">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="danger" size="lg">
                Button
              </COMPONENT.BtnOutlined>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4 mx-auto">
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="secondary" size="sm">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="secondary">
                Button
              </COMPONENT.BtnOutlined>
            </div>
            <div className="w-full max-w-fit">
              <COMPONENT.BtnOutlined variant="secondary" size="lg">
                Button
              </COMPONENT.BtnOutlined>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
