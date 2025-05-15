import { useState, useEffect } from "react";
import vibescribe from "../../assets/video/vibescribe.mp4";
import github from "../../assets/icons/github-original.svg";
import britishAirwaysHackathon from "../../assets/images/british-airways-hackathon.png";
import todo from "../../assets/images/todo.png";

export default function Projects() {
  const [isAutoplayActivated, setIsAutoplayActivated] = useState(true);

  useEffect(() => {
    const screenSizeCheck = () => {
      const isWiderThan360 = window.matchMedia("(min-width: 360px)").matches;

      if (isWiderThan360) {
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
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Knex",
      ],
      video: vibescribe,
      link: "https://github.com/Gab-A/gabrielle-asante-capstone-front-end",
    },
    {
      title: "British Airways Hackathon",
      description:
        "Participated in a 24-hour hackathon hosted by British Airways, where I collaborated with a team of software engineers, data scientists, and UX/UI designers to develop a solution addressing the challenge: 'How might we encourage customers to book flights using their travel vouchers?'",
      technologies: ["HTML", "CSS", "Sass", "JavaScript", "React", "Figma"],
      image: britishAirwaysHackathon,
      link: "https://github.com/Gab-A/aero-dynamic-british-airways-frontend-hackathon",
    },
    {
      title: "Todo",
      description:
        "A todo app that allows users to add, toggle, and delete their todos. Todos are categorised into active and completed sections.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Redux Toolkit",
        "localStorage",
      ],
      image: todo,
      link: "https://github.com/Gab-A/todo",
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
      <div className="grid grid-cols-1 gap-4 md:gap-16 justify-items-center xl:gap-20">
        {projects.map((project, index) => {
          const britishAirwaysHackathonCard =
            project.title === "British Airways Hackathon" &&
            "mr-[4rem] min-[412px]:mr-[5.8rem] min-[430px]:mr-0 md:mr-16 min-[800px]:-ml-4 min-[950px]:mr-0  min-[950px]:ml-0";
          return (
            <div key={index}>
              <div className="w-[98%] shadow-md hover:translate-y-0.5 m-auto bg-violet-50 rounded-xl min-[550px]:max-w-[400px] md:flex md:justify-center md:max-w-full lg:py-2.5 lg:px-3 xl:pt-4 xl:pb-20 xl:px-4 xl:w-[98%] 2xl:pb-20 min-[2280px]:mt-20 min-[2280px]:px-14 ">
                <div className=" bg-violet-50 rounded-xl justify-center items-center md:grid md:grid-cols-2 md:items-start md:w-full md:mx-5 md:gap-10 xl:gap-14 md:mt-14 md:mb-8 lg:items-start">
                  <div className="mt-7 md:w-auto md:mt-0 xl:w-auto">
                    {project.video ? (
                      <video
                        controls
                        autoPlay={isAutoplayActivated}
                        muted
                        preload="auto"
                        className="w-auto rounded-t-xl object-cover md:rounded-none"
                      >
                        <source src={vibescribe} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-auto rounded-t-xl object-cover md:rounded-none"
                      />
                    )}
                  </div>
                  <div className="p-6 transition-transfom rounded-b-xl space-y-4 md:p-0 2xl:space-y-6 2xl:pb-24 max-w-7xl min-[2280px]:pb-[18rem]">
                    <div className="flex items-center gap-4">
                      <h2 className="text-2xl items-center gap-2 2xl:text-3xl min-[2280px]:text-[2.2rem]">
                        {project.title}{" "}
                      </h2>
                      <div
                        className={`${britishAirwaysHackathonCard} flex items-center`}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-violet-500 rounded-full bg-violet-500 cursor-pointer py-1 px-1 text-sm min-[2280px]:py-2 min-[2280px]:px-2"
                        >
                          {" "}
                          {"</>"}
                        </a>
                      </div>
                    </div>
                    <p className="leading-relaxed text-md font-light xl:mt-5 2xl:text-lg min-[2280px]:text-xl">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-3 -ml-2 min-[2280px]:gap-6 max-w-4xl md:max-w-3xl">
                      {project.technologies.map((tech, index) => {
                        return (
                          <div
                            key={index}
                            className=" bg-violet-100 text-violet-500 px-3.5 py-1.5 font-light rounded-xl cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-violet-200 hover:text-violet-600 hover:-translate-y-0.5 2xl:text-lg"
                          >
                            <li className="text-md">{tech}</li>
                          </div>
                        );
                      })}
                    </ul>
                    <div className="inline-block -ml-2 bg-violet-100 px-3.5 py-1.5 rounded-xl hover:scale-105 hover:-translate-y-0.5 text-violet-500 font-light hover:bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md hover:bg-violet-700 transition-all duration-300 ease-in-out hover:text-white active:translate-y-2 active:shadow-inner 2xl:text-lg">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2"
                      >
                        <img src={github} alt="github-icon" className="w-6" />
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
