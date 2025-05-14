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
      description: "A major highway expansion project connecting urban centers with improved infrastructure.",
      img: "/main.png",
    },
    {
      id: 2,
      title: "Bridge Construction",
      description: "Modern suspension bridge designed to withstand extreme weather conditions.",
      img: "/main.png",
    },
    {
      id: 3,
      title: "Urban Road Network",
      description: "Comprehensive road network redevelopment in metropolitan areas.",
      img: "/main.png",
    },
  ];

  return (
    <div className="relative py-10">
      <div className=" lg:absolute w-full lg:h-[400px] lg:bg-primary text-black lg:text-white px-4 md:px-6 lg:px-8 py-10">
        <div className="flex-1 flex flex-col space-y-5 text-center md:text-left">
          <span className="text-xl md:text-2xl text-primary lg:text-white">__Recent project</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug">
            Our Newest Projects
          </h1>
        </div>
      </div>

      <div className=" lg:absolute w-full px-4 md:px-6 lg:px-8 mt-8 md:mt-16 lg:mt-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;