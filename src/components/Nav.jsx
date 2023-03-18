import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="hidden bg-[#222222] px-10 py-6 lg:flex items-center justify-between border-b-[1px] border-[#555555] shadow-sm shadow-[#555555]">
      <h1 className=" font-bold text-lg cursor-pointer text-[#ff5733]">
        akshitagrawal.dev
      </h1>
      <div className=" font-semibold flex items-center space-x-5">
        <Link to="home" smooth={true} activeClass="cursor-pointer">
          <h1 className="cursor-pointer hover:text-[#ff5733] transition-all">
            Home
          </h1>
        </Link>

        <Link to="projects" smooth={true} activeClass="cursor-pointer">
          <h1 className="cursor-pointer hover:text-[#ff5733] transition-all">
            Projects
          </h1>
        </Link>

        <Link to="exp" smooth={true} activeClass="cursor-pointer">
          <h1 className="cursor-pointer hover:text-[#ff5733] transition-all">
            Experience
          </h1>
        </Link>

        <Link to="contact" smooth={true} activeClass="cursor-pointer">
          <h1 className="cursor-pointer hover:text-[#ff5733] transition-all">
            Contact
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
