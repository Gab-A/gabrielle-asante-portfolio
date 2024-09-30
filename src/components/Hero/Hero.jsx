import Lottie from "lottie-react";
import womanWorkingAnimation from "../../assets/animations/heroAnimation.json";

export default function Hero() {
  const cvLink =
    "https://docs.google.com/document/d/10D9hdBkLzkorl7hwmGyPE1UYbFYVYGHN/edit?usp=sharing&ouid=117175190293271690444&rtpof=true&sd=true";

  return (
    <section className="relative bg-[url('/src/assets/images/wave-background.svg')] bg-no-repeat m-4 rounded-lg bg-cover bg-center overflow-hidden h-[86vh] md:p-[3rem] md:rounded-none md:m-0 md:h-[50vh] lg:h-screen xl:h-screen">
      <div className="flex flex-col justify-center h-full -mt-16 items-center md:-mt-5 md:max-w-full md:flex-row lg:-mt-20 lg:justify-evenly xl:pl-28 xl:justify-start xl:space-x-6">
        <div className="md:order-2 md:flex md:w-[80%] lg:w-[55%]">
          <Lottie
            animationData={womanWorkingAnimation}
            className="w-3/4 overflow-hidden z-10 m-auto md:-mt-5 md:w-[85%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]"
          />
        </div>
        <div className="flex flex-col text-center gap-y-5 mt-4 md:gap-y-4 lg:gap-y-2">
          <h1 className="text-[2.3rem] sm:text-[2.6rem] leading-normal font-semibold md:whitespace-nowrap md:mb-0 lg:-mr-20 lg:text-[3.9rem]">
            Hey, I&#39;m Gabrielle.
          </h1>
          <p className="text-2xl text-violet-500 font-medium md:mb-0 sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2rem] lg:mt-2">
            A Full Stack Developer.
          </p>
          <div className="flex flex-col justify-center items-center md:mt-6">
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-violet-500 bg-violet-500 py-2.5 px-5 text-white text-lg cursor-pointer font-medium  hover:bg-violet-600 active:shadow-md active:translate-y-2 sm:text-xl sm:py-3 2xl:py-5 md:mt-0"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
