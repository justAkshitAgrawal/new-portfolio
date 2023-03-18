import React from "react";
import akshit from "../media/akshit.jpg";
import "./Hero.css";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Nav from "./Nav";

function Hero() {
  const bioOptions = [
    "I'm a frontend developer, which basically means I'm responsible for making websites look pretty enough that people forget how much they hate the internet.",
    "I turn coffee into code, and pixels into beautiful websites. If it's not responsive, it's not my fault - blame the cookies.",
    "Frontend developer by day, CSS magician by night. I turn pixels into web pages and caffeine into code.",
    "Frontend developer by day, CSS magician by night. I turn coffee into code and make pixels dance.",
    "I may not be able to make your website go viral, but I can definitely make it look good enough to be the envy of your competitor's outdated site.",
  ];

  const random = Math.floor(Math.random() * bioOptions.length);

  return (
    <div className="h-screen">
      <div className="hidden lg:block lg:fixed w-full top-0 z-10">
        <Nav />
      </div>
      <div
        className="flex justify-center items-center flex-col lg:flex-row lg:pt-[30vh] pt-[14vh] lg:space-x-20"
        id="home"
      >
        <div className=" order-2 lg:order-1">
          <div className=" flex flex-col items-center lg:items-start">
            <h1 className=" font-extrabold text-3xl mt-5 lg:mt-0 lg:text-4xl ">
              Akshit Agrawal
            </h1>
            <h1 className=" font-bold text-xl mt-2 text-[#E1B12C]">
              Front-End Developer
            </h1>
            <h1 className=" lg:max-w-[22vw] max-w-[80vw] text-center text-sm lg:text-base lg:text-left mt-4 text-md text-white/70">
              {bioOptions[random]}
            </h1>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-4 mt-3">
            <a
              href="https://www.linkedin.com/in/akshitagrwl/"
              target="_blank"
              rel="noreferrer"
            >
              <RxLinkedinLogo className=" h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer" />
            </a>
            <a
              href="https://github.com/justAkshitAgrawal"
              target="_blank"
              rel="noreferrer"
            >
              <RxGithubLogo className=" h-7 w-7 hover:text-[#ff5733] transition-all cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="wrap">
            <div className="outer">
              <div className=" circle">
                <img src={akshit} alt="" className=" bg-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col lg:flex-row pt-[8vh] lg:pt-[17vh] lg:space-x-10">
        <h1 className=" font-semibold flex items-center ">
          Tech Stack <span className=" hidden lg:block lg:ml-3">|</span>{" "}
        </h1>
        <div className="flex space-x-3 mt-2 lg:mt-0 lg:space-x-5 items-center">
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt=""
              className="lg:h-7 lg:w-7 h-5 w-5 rounded"
            />
          </div>
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <FaReact className="lg:h-7 lg:w-7 h-5 w-5 rounded text-[#5ed3f3] animate-[spin_10s_linear_infinite] " />
          </div>
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <SiTailwindcss className="lg:h-7 lg:w-7 h-5 w-5 rounded text-[#5ed3f3] " />
          </div>
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <img
              src="https://daynilgroup.com/resources/images/home/javadevelopmentlogo.png"
              className="lg:h-7 lg:w-7 h-5 w-5 rounded "
              alt=""
            />
          </div>
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              className="lg:h-7 lg:w-7 h-5 w-5 rounded "
              alt=""
            />
          </div>
          <div className="bg-[#555555] p-2 rounded-full border-2 border-[#E1B12C]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              className="h-7 w-7 rounded "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
