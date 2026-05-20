import React from "react";

const ResumeButton = ({ name }) => {
  return (
        <a
          href="../resume/SowmithSripadiResume.pdf"
          download
      className="inline-flex items-center justify-start px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-[#5c5c5c] dark:bg-[#1a1a1a] rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
    >
      <span
        className={`animate-shine bg-clip-text text-transparent`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, #333333 0%, #e6e6e6 100%, #333333 20%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: "3.5s",
        }}
      >
        {name}
      </span>
    </a>
  );
};

export default ResumeButton;
