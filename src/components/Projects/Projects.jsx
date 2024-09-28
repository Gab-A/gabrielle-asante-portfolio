import { useState } from "react";
import vibescribe from "../../assets/video/vibescribe.mp4";
import github from "../../assets/icons/github-original.svg";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

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
    <section id="projects" className="m-6 md:px-2 md:mt-10 lg:mt-20 2xl:px-10">
      <div className="flex items-center gap-8">
        <h2 className="text-4xl font-medium mb-8 md:mt-5 whitespace-nowrap md:text-[2.2rem] lg:text-5xl">
          Projects<span className="text-violet-300 text-5xl">.</span>
        </h2>
        <div className="w-full border-t-[1.5px] border-neutral-800"></div>
      </div>
      <motion.div
        key={activeProjectIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-[98%] shadow-sm hover:translate-y-0.5 m-auto bg-violet-50 rounded-xl md:flex md:justify-center md:w-full lg:py-2.5 lg:px-3 xl:py-4 xl:px-4 xl:w-[75%]"
      >
        <div className=" bg-violet-50 rounded-xl justify-center items-center md:flex md:items-start md:w-full md:mx-5 md:gap-10 md:mt-8 lg:items-center">
          <div className="md:w-auto xl:w-auto">
            <video
              controls
              className="w-full rounded-t-xl object-cover md:rounded-none"
            >
              <source src={vibescribe} type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="p-6 transition-transfom rounded-b-xl space-y-6 md:space-y-3 md:p-0 xl:p-2">
              <h2 className="text-2xl 2xl:text-[1.7rem] flex items-center gap-1.5">
                {projects[activeProjectIndex].title}{" "}
                <a
                  href="https://github.com/Gab-A/gabrielle-asante-capstone-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="border border-violet-500 rounded-full bg-violet-500 cursor-pointer py-1 px-1 text-sm">
                    {"</>"}
                  </span>
                </a>
              </h2>
              <p className="leading-relaxed text-md font-light xl:mt-5 2xl:text-xl">
                {projects[activeProjectIndex].description}
              </p>
              <ul className="flex flex-wrap gap-3 -ml-2 md:gap-2.5 lg:gap-3">
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
