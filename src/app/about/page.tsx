"use client"
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ProjectsCount from "../Components/ProjectsCount";
import YearsCount from "../Components/YearsCount";
import ClientsCount from "../Components/ClientsCount";
import Skills from "../Components/Skills";
import Transition from "../Components/Transition";
import Cursor from "../Components/Cursor";

const Page = () => {
  return (
    <div>
      <Transition />
      <Cursor />
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
        {/* <AboutContent /> */}
        <div className="meleft">
        <h1>About Me</h1>
        <p>Hi Im <b>Dhairya Gupta</b> a Full-Stack web developer and UI/UX designer with a passion for creating beautiful functional and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients visions to life.</p>
        <p>I believe that design is about more than just making things look pretty its about solving problems and creating intuitive enjoyable experiences for users</p>
      </div>
      <div className="meImage">
          <Image className="meimg" width={400} height={300} src="/gallery.png" alt="profile" />
        </div>
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
