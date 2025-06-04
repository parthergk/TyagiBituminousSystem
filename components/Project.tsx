// Project.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
}

const Project = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Highway Development",
      description: "Agra Lucknow Expressway microsurfacing and slurry sealing project.",
      img: "/img/project/project1.jpg",
    },
    {
      id: 2,
      title: "NHAI Project",
      description: "Tack coat and priming work on Basukinath-Deoghar NHAI project.",
      img: "/img/project/project2.png",
    },
    {
      id: 3,
      title: "Rural PMGSY Road Network",
      description: "ColdMix work at Baramulla Jammu & Kashmir.",
      img: "/img/project/project3.jpeg",
    },
  ];

  return (
    <div className="relative pt-16 md:pt-24 lg:pt-32">
      <div className=" lg:flex lg:justify-center relative w-full lg:h-[400px] lg:bg-primary text-black lg:text-white py-10">
        <div className="flex-1 flex flex-col space-y-5 text-center md:text-left px-4 md:px-6 lg:px-8">
        <span className=" text-primary lg:text-white text-sm md:text-base font-semibold tracking-wider uppercase mb-2">__Recent project</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 leading-snug ">
            Our Newest Projects
          </h1>
        </div>

      <div className=" lg:absolute w-full px-4 md:px-6 lg:px-8 mt-8 md:mt-16 lg:mt-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
          </div>
      </div>
    </div>
  );
};

export default Project;