import React, { useState } from "react";
import * as COMPONENT from "@Components/index";

export default function Layout(props) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div className="w-full min-h-screen md:h-screen relative flex overflow-hidden">
      <COMPONENT.Sidebar
        isExtended={openSidebar}
        onClick={() => setOpenSidebar(!openSidebar)}
      />
      <div className="w-full md:flex">
        <div className="w-full overflow-y-auto">
          <COMPONENT.Header onClick={() => setOpenSidebar(!openSidebar)} />
          <COMPONENT.Container>{props?.children}</COMPONENT.Container>
        </div>
      </div>
    </div>
  );
}
