import React from "react";
import "./Project.css";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

function Project({ img, title, info, skills, git, demo }) {
  return (
    <div className=" bg-[#555555] p-5 rounded-lg flex flex-col lg:flex-row items-center lg:space-x-5 border-2 border-[#E1B12C]">
      <div className="content hidden lg:block">
        <div className="screen rounded-lg">
          <img src={img} alt="" className=" rounded-lg cursor-pointer" />
        </div>
      </div>
      <div className=" lg:max-w-[20vw] flex items-center flex-col">
        <h1 className=" font-semibold">{title}</h1>
        <h1 className="text-sm text-center mt-3">{info}</h1>
        <div className="flex mt-3 space-x-4">
          {skills.map((skill) => {
            return (
              <div key={skill} className="text-xs rounded p-2 bg-[#ff5733] ">
                {skill}
              </div>
            );
          })}
        </div>
        <div className="flex mt-3 space-x-4">
          <a href={demo} target="_blank" rel="noreferrer">
            <AiOutlineLink className="h-6 w-6 hover:text-[#ff5733] transition-all" />
          </a>
          <a href={git} target="_blank" rel="noreferrer">
            <AiOutlineGithub className="h-6 w-6 hover:text-[#ff5733] transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
