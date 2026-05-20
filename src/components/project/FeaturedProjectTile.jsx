import React from "react";
import ImageSlider from "./ImageSlider";

function FeaturedProjectTile({
  name,
  imageData,
  projectDescriptions,
  githubLink,
  demoLink,
}) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-6xl rounded-3xl p-4 px-12 bg-[#fafafa] dark:bg-darkTileColor shadow-md">
        <div className="font-OldStandardTT text-[1.6rem] mb-12 flex flex-col gap-0 items-center">
          <p>{name}</p>
          <div className="flex gap-4">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Live Demo - Coming Soon
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

        <div className="flex w-full justify-center md:gap-12 gap-4 flex-col lg:flex-row lg:mb-8 items-center">
          <div className="lg:w-1/2 flex lg:justify-end w-full justify-center">
            <div className="max-w-lg w-full h-auto overflow-hidden mx-auto">
              <ImageSlider images={imageData} />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
            <ul className="max-w-md w-full text-gray-700 list-disc list-outside space-y-2 leading-relaxed pl-8 text-justify">
              {projectDescriptions[name].map((desc, idx) => (
                <li key={idx} className="dark:text-darkSecondaryText">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectTile;
