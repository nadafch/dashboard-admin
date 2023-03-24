import React from "react";

export default function Component(props) {
  return (
    <div className="w-full min-h-screen p-3 bg-slate-100">
      {props?.children}
    </div>
  );
}
