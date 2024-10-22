import coding from "../../assets/images/coding.svg";

export default function About() {
  return (
    <section id="about">
      <div className="flex items-center justify-center gap-8 md:mb-8">
        <h2 className="mb-5 text-4xl font-medium whitespace-nowrap md:text-[2.2rem] lg:text-5xl">
          About Me
          <span className="text-violet-300 text-5xl">.</span>
        </h2>
        <div className="w-full border-t-[1.5px] border-neutral-800"></div>
      </div>
      <div className="lg:flex lg:justify-center 2xl:w-full lg:gap-20 2xl:gap-32 min[2650px]:items-center">
        <div className="space-y-6 mt-3 text-[17.5px] sm:text-lg md:mt-0 lg:w-auto 2xl:max-w-[1440px] 2xl:w-3/4 min-[2040px]:text-2xl min-[2560px]:text-[1.6rem] min-[2560px]:space-y-12">
          <p className=" leading-loose">
            In 2023, I uncovered my passion for software engineering while
            seeking new career opportunities. This newfound interest allowed me
            to delve into the world of coding.
          </p>
          <p className="leading-loose">
            After months later of self-teaching, I decided to join a bootcamp.
            This provided me with structured learning and hands on experience
            which helped me to continuously develop and evolve as a full-stack
            developer. This intensive program not only solidified my technical
            foundation but also enhanced my problem-solving abilities and
            prepared me for real-world challenges in the tech industry.
          </p>{" "}
          <p className="leading-loose">
            With an enthusiasm for enhancing user interaction through front-end
            development, I&#39;m keen to connect with peers who have shared
            interests and excited to explore new opportunities where I can both
            add value and further my career.
          </p>
        </div>
        <div className="flex justify-center items-center sm:mt-4 sm:m-auto sm:w-4/6 md:w-3/5 lg:w-[150rem] xl:w-[135rem] 2xl:w-3/5 min-[1650px]:-mt-20 min-[1930px]:w-2/4 min-[2040px]:w-1/3 min-[2560px]:w-1/4">
          <img src={coding} />
        </div>
      </div>
    </section>
  );
}
