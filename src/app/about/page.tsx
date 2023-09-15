"use client"
import React from "react";

import Typewriter from "typewriter-effect";
import ProjectsCount from "../Components/ProjectsCount";
import YearsCount from "../Components/YearsCount";
import ClientsCount from "../Components/ClientsCount";
import Skills from "../Components/Skills";
import Transition from "../Components/Transition";
import AboutContent from "../Components/AboutContent"
const Page = () => {
  return (
    <div>
      <Transition />
      <div className="about">
        <h1>Passion Fuels</h1>
        <h1>
          <Typewriter
            options={{
              strings: ["Purpose!", "Objective!", "Motive!"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
        </h1>
      </div>
      <div className="me">
        <AboutContent />
        <div className="meright">
          <ClientsCount />
          <ProjectsCount />
          <YearsCount />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Page;
