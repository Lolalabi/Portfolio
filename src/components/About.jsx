import React, { forwardRef } from "react";
import Services from "./Services";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoJquery, BiLogoVisualStudio } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";

const About = forwardRef((props, ref) => {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3 },
    { name: "Javascript", icon: DiJavascript },
    { name: "React", icon: FaReact },
    { name: "SASS", icon: FaSass },
    { name: "JQuery", icon: BiLogoJquery },
    { name: "RESTful APIs", icon: BsDatabaseFillGear },
    { name: "VS Code", icon: BiLogoVisualStudio },
    { name: "Github", icon: FaGithub },
    { name: "Bootstrap", icon: FaBootstrap },
  ];
  return (
    <div ref={ref} className="px-7 md:px-10 sm:mt-24" id="about">
      <h1 className="text-3xl mt-5 text-primary font-semibold">About me</h1>
      <p className="text-white my-2 md:2/3 leading-[2]">
        Hi my name is Olabisi Lola Afolabi, i am a frontend web developer, UI
        designer, and Mobile developer, i have honed my skills in web
        development and i have core understanding of UI development. Here are
        the major skills i have. {""}
      </p>
      <div className="md:flex items-center my-7">
        <p className="text-primary text-8xl font-bold">3+</p>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[200px] md:h-[140px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <skill.icon className="w-16 h-10" />
            <p className="mt-3 text-1xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <Services />
    </div>
  );
});

export default About;
