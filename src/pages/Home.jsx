import React from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className=" min-h-screen h-fit bg-[#222222] font-montserrat text-[#F7F7F7]">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
