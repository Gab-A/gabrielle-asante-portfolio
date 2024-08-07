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
  const frontend = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Sass", image: sass },
    { name: "TailwindCSS", image: tailwindcss },
    { name: "JavaScript", image: javascript },
    { name: "Typescript", image: typescript },
    { name: "React", image: react },
    { name: "Redux", image: redux },
  ];

  const backend = [
    { name: "Node.js", image: node },
    { name: "Express", image: express },
    { name: "MySQL", image: mySQL },
    { name: "Knex.js", image: knex },
  ];

  const toolsAndWorkflow = [
    { name: "Jest", image: jest },
    { name: "React Testing Library", image: reactTestingLibrary },
    { name: "Git", image: git },
    { name: "GitHub", image: github },
    { name: "VSCode", image: vscode },
    { name: "Jira", image: jira },
  ];

  return (
    <section>
      <div className="ml-4">
        <h2 className="text-4xl font-medium mb-5">
          Skills<span className="text-violet-400 text-5xl">.</span>
        </h2>
      </div>
      <SkillCategory title="Frontend Technologies" skills={frontend} />
      <SkillCategory title="Backend Technologies" skills={backend} />
      <SkillCategory
        title="Development Tools And Workflow"
        skills={toolsAndWorkflow}
      />
    </section>
  );
}
