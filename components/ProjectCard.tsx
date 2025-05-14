// ProjectCard.tsx
import Image from "next/image";
import React from "react";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    img: string;
    description: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative">
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
          <Image 
            src={project.img} 
            alt={project.title} 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-700">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;