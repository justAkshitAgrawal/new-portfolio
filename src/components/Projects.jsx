import React from "react";
import Project from "./Project";
import projectPortfolio from "../media/projectPortfolio.png";
import netflix from "../media/netflix.png";

function Projects() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen mx-10 lg:mx-0 pt-[10vh] lg:pt-0 "
      id="projects"
    >
      <div className=" relative">
        <h1 className=" uppercase absolute bottom-14 lg:bottom-6 left-0 text-[#ff5733]">
          Portfolio
        </h1>
        <h1 className=" text-lg lg:text-xl font-semibold">
          Projects that will make you say 'Wow' or at least 'Huh?'
        </h1>
      </div>
      <div className="pt-10 flex flex-col space-y-10">
        <Project
          img={projectPortfolio}
          title="Minimal Portfolio Website"
          skills={["React", "Tailwind CSS"]}
          demo="https://react-portfolio-sigma-three.vercel.app/"
          git="https://github.com/justAkshitAgrawal/react-portfolio"
          info="If you're looking for a portfolio website that's sleek, modern, and fully responsive, my latest project has got you covered! Using React, I've built a minimalist portfolio website that's perfect for showcasing your work on any device."
        />

        <Project
          img={netflix}
          title="Netflix Clone"
          skills={["React", "Tailwind CSS", "Firebase"]}
          demo="https://netflix-clone-mu-lyart.vercel.app/"
          git="https://github.com/justAkshitAgrawal/netflix-clone"
          info="Stream your favorite shows and movies on any device with my fully responsive Netflix clone. Built using React for the ultimate viewing experience. Grab some popcorn, fire up my Netflix clone, and start streaming today!"
        />
      </div>
    </div>
  );
}

export default Projects;
