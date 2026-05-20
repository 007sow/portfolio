import React from "react";
import ImageSlider from "./ImageSlider";

function ProjectTile({
  name,
  imageData,
  projectDescriptions,
  demoLink,
  githubLink,
}) {
  return (
    <div className="bg-[#fafafa] dark:bg-darkTileColor max-w-lg mx-auto p-6 px-10 rounded-3xl shadow-md">
      <div className="font-OldStandardTT text-[1.2rem] mb-4 flex flex-col gap-0 items-center">
        <p>{name}</p>
        <div className="flex gap-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <div className="max-w-sm w-full h-auto overflow-hidden">
          <ImageSlider images={imageData} />
        </div>
      </div>
      <ul className="max-w-sm w-full text-gray-700 list-disc list-outside text-justify space-y-2 leading-relaxed mx-auto text-sm mt-6 pl-2 ">
        {projectDescriptions[name].map((desc, idx) => (
          <li key={idx} className="dark:text-darkSecondaryText">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTile;
