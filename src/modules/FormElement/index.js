import * as COMPONENT from "@Components/index";

export default function Pages() {
  return (
    <div className="grid grid-cols-2 p-3">
      <div className="w-full bg-white rounded-md col-span-1 shadow-sm">
        <div className="p-3 border-b">
          <h5 className="text-[16px]">Input Fields</h5>
        </div>
        <div className="p-5">
          <COMPONENT.InputText
            label="Default Input"
            placeholder="Default Input"
            isRequired
          />
        </div>
      </div>
    </div>
  );
}
