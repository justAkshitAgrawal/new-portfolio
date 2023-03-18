import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { RxLinkedinLogo } from "react-icons/rx";

function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center pb-16 mx-10 lg:mx-0"
      id="contact"
    >
      <div className=" relative">
        <h1 className=" uppercase absolute bottom-20 lg:bottom-6 left-0 text-[#ff5733]">
          Contact
        </h1>
        <h1 className="  text-xl font-semibold">
          Get in Touch or Risk Being Struck by Lightning (Not Really, But Maybe)
        </h1>
      </div>
      <div className="flex lg:space-x-10 flex-col lg:flex-row">
        <div className="mt-10 flex items-center space-x-4">
          <div className="bg-[#555] p-2 rounded-full border-2 border-[#E1B12C]">
            <IoMdMailUnread className="h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer" />
          </div>
          <div>
            <h1 className=" font-semibold">Mail</h1>
            <a href="mailto:akshitaggarwal7@gmail.com" className=" text-sm ">
              <h1 className="hover:text-[#ff5733] transition-all">
                akshitaggarwal7@gmail.com
              </h1>
            </a>
          </div>
        </div>
        <div className="mt-10 flex items-center space-x-4">
          <div className="bg-[#555] p-2 rounded-full border-2 border-[#E1B12C]">
            <RxLinkedinLogo className="h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer" />
          </div>
          <div>
            <h1 className=" font-semibold">Send a PM</h1>
            <a
              href="https://www.linkedin.com/in/akshitagrwl/"
              target="_blank"
              rel="noreferrer"
              className=" text-sm "
            >
              <h1 className="hover:text-[#ff5733] transition-all">
                LinkedIn:// akshitagrwl
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
