import React from "react";
import { MdPlayArrow } from "react-icons/md";
import Exp from "./Exp";

function Experience() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen mx-10 lg:mx-0 "
      id="exp"
    >
      <div className=" relative">
        <h1 className=" uppercase absolute bottom-20 lg:bottom-6 left-0 text-[#ff5733]">
          Experience
        </h1>
        <h1 className="  text-xl font-semibold">
          Survived These Jobs and Lived to Tell the Tale: My Work Experience
        </h1>
      </div>
      <div className="relative mt-14  flex justify-center">
        <div className="h-[45vh] w-1 bg-[#555555]"></div>
        <div className="absolute top-7 left-3 flex space-x-3">
          <MdPlayArrow className="h-5 w-5 text-[#ff5733] mt-2 " />
          <Exp
            role="Front-end Intern"
            company="Scrollify"
            date="Jan 2023 - Feb 2023"
            info={`• Implemented a user-friendly portfolio builder using React for creative professionals.\n• Debugged and fixed front-end technical issues to improve user experience.\n• Integrated the portfolio builder with back-end systems to ensure seamless data flow and functionality.`}
          />
        </div>
        <div className="absolute top-40 right-3 flex space-x-3">
          <Exp
            role="Lead Front-end Intern "
            company="Jobs Territory"
            date="June 2022 - August 2022"
            info={`• Worked on the company's Applicant Tracking System (ATS) platform to enhance the user experience.\n• Built the company's official website from scratch, ensuring that it is user-friendly and visually appealing using React.\n• Led a team of 5 interns,resolved conflicts and ensured smooth progress of work.`}
          />
          <MdPlayArrow className="h-5 w-5 text-[#ff5733] mt-2 rotate-180 " />
        </div>
      </div>
    </div>
  );
}

export default Experience;
