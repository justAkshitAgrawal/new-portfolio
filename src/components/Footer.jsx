import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-black p-7  ">
      <h1 className=" text-sm font-semibold">
        Copyright © {new Date().getFullYear()}. All rights are reserved
      </h1>
    </div>
  );
}

export default Footer;
