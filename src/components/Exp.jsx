import React from "react";

function Exp({ role, company, date, info }) {
  return (
    <div className="flex items-start space-x-3">
      <div className=" bg-[#555555]/50 p-2 rounded-lg border-2 border-[#E1B12C] lg:w-[18vw] w-[32vw]">
        <h1 className=" lg:text-lg font-semibold">{role}</h1>
        <h1 className=" text-xs lg:text-sm text-white/60">
          {company} |<br className=" lg:hidden" /> {date}
        </h1>
        <h1 className=" whitespace-pre-wrap mt-2 text-white/70 hidden lg:block">
          {info}
        </h1>
      </div>
    </div>
  );
}

export default Exp;
