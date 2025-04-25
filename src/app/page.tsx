// pages/index.tsx
import React from "react";
import Image from "next/image";
import BetHistory from "./comps/datacomp";

const staticbet: React.FC = () => {
  
  return (
      <div className="max-w-sm min-h-screen flex flex-col bg-customBg text-white  mx-auto p-4 pr-1 pl-0 pb-0  font-sans -mb-2 pt-0" >
        {/* Tab Navigation */}
      <div className=" flex-1">
        <Image src='/urlmain.jpg' width={1000} alt="ok" height={1000} className="sticky bottom-0" />
        <Image src='/headerrr.jpg' alt="head" width={1000} height={1000} className="sticky top-0 pb-1 "style={{ zIndex: 1 }} />

          <BetHistory />
</div>
        <Image src='/sportyfoot.jpg' width={400} alt="ok" height={1000} className=" fixed mt-5 bottom-0 " />
    </div>
  );
};
  
export default staticbet;
