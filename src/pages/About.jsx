import React from "react";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <div className="h-full w-full mt-[4rem]">
        <img
          src="/director.png"
          alt="director"
          className="h-full w-full object-contain"
        />
        <img
          src="/about.png"
          alt="about"
          className="h-full w-full object-contain"
        />
        <img
          src="/vision.png"
          alt="about"
          className="h-full w-full object-contain"
        />
        <img
          src="/mission.png"
          alt="about"
          className="h-full w-full object-contain"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
