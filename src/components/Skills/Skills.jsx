import Marquee from "react-fast-marquee";
import SkillCategory from "../SkillCategory/SkillCategory";
import html from "../../assets/icons/html5-original.svg";
import css from "../../assets/icons/css3-original.svg";
import sass from "../../assets/icons/sass-original.svg";
import tailwindcss from "../../assets/icons/tailwindcss-original.svg";
import javascript from "../../assets/icons/javascript-original.svg";
import typescript from "../../assets/icons/typescript-original.svg";
import react from "../../assets/icons/react-original.svg";
import redux from "../../assets/icons/redux-original.svg";
import node from "../../assets/icons/nodejs-icon.svg";
import express from "../../assets/icons/express-original.svg";
import mySQL from "../../assets/icons/mysql-original.svg";
import knex from "../../assets/icons/knexjs-original.svg";
import jest from "../../assets/icons/jest-plain.svg";
import reactTestingLibrary from "../../assets/icons/testing-library.svg";
import git from "../../assets/icons/git-original.svg";
import github from "../../assets/icons/github-original.svg";
import vscode from "../../assets/icons/vscode-original.svg";
import jira from "../../assets/icons/jira-original.svg";

export default function Skills() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Sass", image: sass },
    { name: "Tailwind CSS", image: tailwindcss },
    { name: "JavaScript", image: javascript },
    { name: "Typescript", image: typescript },
    { name: "React", image: react },
    { name: "Redux", image: redux },
    { name: "Node.js", image: node },
    { name: "Express", image: express },
    { name: "MySQL", image: mySQL },
    { name: "Knex.js", image: knex },
    { name: "Jest", image: jest },
    { name: "React Testing Library", image: reactTestingLibrary },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "VSCode", image: vscode },
    { name: "Jira", image: jira },
  ];

  return (
    <section id="skills">
      <div className="flex items-center gap-8 md:mb-10">
        <h2 className="text-4xl font-medium mb-5 whitespace-nowrap md:text-[2.2rem] lg:text-5xl">
          Skills<span className="text-violet-300 text-5xl">.</span>
        </h2>
        <div className="w-full border-t-[1.5px] border-neutral-800"></div>
      </div>
      <div className="h-[25hvh]">
        <Marquee
          speed={65}
          gradient={false}
          pauseOnClick={true}
          pauseOnHover={true}
          loop={0}
          className="m-0 p-0 overflow-hidden w-full"
        >
          {skills.map((skill) => (
            <ul key={skill.name} className="flex">
              <li className="flex justify-center items-center rounded-full m-5 p-5 w-22 h-22 list-none  bg-violet-50 shadow-[0_1px_25px_rgba(0,0,0,0.1)] border-[1px] border-solid border-white md:p-6 md:h-auto md:w-auto md:rounded-2xl">
                <div className="flex items-center md:gap-8">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="mt-0.5 w-9 sm:w-11 md:mb-2.5"
                  />
                  <h3 className=" hidden md:flex lg:text-gray-700 md:font-medium">
                    {skill.name}
                  </h3>
                </div>
              </li>
            </ul>
          ))}
        </Marquee>
        {/* <SkillCategory title="Frontend Technologies" skills={frontend} />
        <SkillCategory title="Backend Technologies" skills={backend} />
        <SkillCategory
          title="Development Tools And Workflow"
          skills={toolsAndWorkflow}
        /> */}
      </div>
    </section>
  );
}
