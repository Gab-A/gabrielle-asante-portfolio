import vibescribe from "../../assets/video/vibescribe.mp4";
import github from "../../assets/icons/github-original.svg";

export default function Projects() {
  const technologies = [
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
  ];

  return (
    <section className="mt-5 mb-5">
      <h2 className=" ml-4  text-4xl font-medium mb-8">
        Projects<span className="text-violet-300 text-5xl">.</span>
      </h2>
      <div className="max-w-[88%] shadow-sm hover:-translate-y-0.5 cursor-pointer m-auto">
        <video controls className="w-full rounded-t-xl object-cover">
          <source src={vibescribe} type="video/mp4" />
        </video>
        <div className="bg-violet-50 p-6 transition-transfom rounded-b-xl space-y-6">
          <h2 className="text-2xl">VibeScribe</h2>
          <p className="leading-relaxed text-md font-light">
            This app helps users track their emotions and journal their
            thoughts. It provides insights into emotional well-being with a
            calendar to view mood trends.
          </p>
          <ul className="flex flex-wrap gap-3 -ml-2">
            {technologies.map((tech, index) => {
              return (
                <div
                  key={index}
                  className=" bg-violet-100 text-violet-500 px-3.5 py-1.5 font-light rounded-xl cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-violet-200 hover:text-violet-600 hover:-translate-y-0.5"
                >
                  <li className="text-md">{tech}</li>
                </div>
              );
            })}
          </ul>
          <div className="inline-block -ml-2 bg-violet-100 px-3.5 py-1.5 rounded-xl hover:scale-105 hover:-translate-y-0.5 text-violet-500 font-light hover:bg-gradient-to-r from-violet-500 to-indigo-500 shadow-md hover:bg-violet-700 transition-all duration-300 ease-in-out hover:text-white active:translate-y-2 active:shadow-inner">
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
      </div>
    </section>
  );
}
