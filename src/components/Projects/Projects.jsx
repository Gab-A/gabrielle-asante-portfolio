import { useState, useEffect } from "react";
import vibescribe from "../../assets/video/vibescribe.mp4";
import github from "../../assets/icons/github-original.svg";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isAutoplayActivated, setIsAutoplayActivated] = useState(true);

  useEffect(() => {
    const screenSizeCheck = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

      if (isMediumScreen) {
        setIsAutoplayActivated(false);
      } else {
        setIsAutoplayActivated(true);
      }
    };

    screenSizeCheck();

    window.addEventListener("resize", screenSizeCheck);

    return () => {
      window.removeEventListener("resize", screenSizeCheck);
    };
  }, []);

  const projects = [
    {
      title: "VibeScribe",
      description:
        "This app helps users track their emotions and journal their thoughts. It provides insights into emotional well-being with a calendar to view mood trends.",
      technologies: [
        "HTML",
        "CSS",
        "Sass",
        "MUI",
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
        "Knex",
      ],
    },
  ];

  return (
    <section id="projects">
      <div className="flex items-center gap-8 mt-20 md:mt-24 md:mb-10 2xl:mt-44 min-[2280px]:mt-48">
        <h2 className="text-4xl font-medium mb-5 whitespace-nowrap md:text-[2.2rem] lg:text-5xl">
          Projects
          <span className="text-violet-300 text-5xl">.</span>
        </h2>
        <div className="w-full border-t-[1.5px] border-neutral-800"></div>
      </div>
      <motion.div
        key={activeProjectIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-[98%] shadow-sm hover:translate-y-0.5 m-auto bg-violet-50 rounded-xl md:flex md:justify-center md:w-full lg:py-2.5 lg:px-3 xl:pt-4 xl:pb-20 xl:px-4 xl:w-[98%] 2xl:pb-20 min-[2280px]:mt-20 min-[2280px]:px-14 "
      >
        <div className=" bg-violet-50 rounded-xl justify-center items-center md:flex md:items-start md:w-full md:mx-5 md:gap-10 md:mt-14 md:mb-8 lg:items-start">
          <div className="mt-7 md:w-auto md:mt-0 xl:w-auto">
            <video
              controls
              autoPlay={isAutoplayActivated}
              muted
              preload="auto"
              className="w-full rounded-t-xl object-cover md:rounded-none"
            >
              <source src={vibescribe} type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="p-6 transition-transfom rounded-b-xl space-y-6 md:p-0 2xl:space-y-6 2xl:pb-24 max-w-7xl min-[2280px]:pb-[18rem]">
              <h2 className="text-2xl flex items-center gap-1.5 2xl:text-3xl min-[2280px]:text-[2.2rem]">
                {projects[activeProjectIndex].title}{" "}
                <a
                  href="https://github.com/Gab-A/gabrielle-asante-capstone-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="border border-violet-500 rounded-full bg-violet-500 cursor-pointer py-1 px-1 text-sm min-[2280px]:py-2 min-[2280px]:px-2">
                    {"</>"}
                  </span>
                </a>
              </h2>
              <p className="leading-relaxed text-md font-light xl:mt-5 2xl:text-lg min-[2280px]:text-xl">
                {projects[activeProjectIndex].description}
              </p>
              <ul className="flex flex-wrap gap-3 -ml-2 min-[2280px]:gap-6 max-w-4xl">
                {projects[activeProjectIndex]?.technologies.map(
                  (tech, index) => {
                    return (
                      <div
                        key={index}
                        className=" bg-violet-100 text-violet-500 px-3.5 py-1.5 font-light rounded-xl cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-violet-200 hover:text-violet-600 hover:-translate-y-0.5 2xl:text-lg"
                      >
                        <li className="text-md">{tech}</li>
                      </div>
                    );
                  }
                )}
              </ul>
              <div className="inline-block -ml-2 bg-violet-100 px-3.5 py-1.5 rounded-xl hover:scale-105 hover:-translate-y-0.5 text-violet-500 font-light hover:bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md hover:bg-violet-700 transition-all duration-300 ease-in-out hover:text-white active:translate-y-2 active:shadow-inner 2xl:text-lg">
                <a
                  href="https://github.com/Gab-A/gabrielle-asante-capstone-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                >
                  <img src={github} alt="github-icon" className="w-6" />
                  Github
                </a>
              </div>
            </div>
            <div className="flex justify-end mt-3 pb-3 pr-3"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
