import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import projects from "./constant/projects";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-7 md:px-10 my-8" id="projects">
      <h1 className="text-3xl mt-5 text-primary font-semibold">
        Featured projects:
      </h1>
      <p className="text-white my-2 md:2/3 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real world projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4"
          >
            <img
              src={project.photo}
              alt=""
              className="mb-4 h-[250px] w-auto transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-1 cursor-pointer object-fill rounded"
            />
            <h3 className="text-primary font-semibold text-lg">
              {project.title}
            </h3>
            <p className="text-white mt-1">{project.description}</p>
            <div className="mt-5">
              <Link to={project.live} target="_blank">
                <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary">
                  Live
                </button>
              </Link>
              <Link to={project.repo} target="_blank">
                <button className="btn outline py-1.5 px-6 rounded border-none ml-5 text-white ">
                  Git Repo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
