import Lottie from "lottie-react";
import womanWorkingAnimation from "../../assets/animations/heroAnimation.json";
import Button from "../Button/Button";

export default function Hero() {
  const cvLink =
    "https://docs.google.com/document/d/10D9hdBkLzkorl7hwmGyPE1UYbFYVYGHN/export?format=pdf";

  return (
    <section className="relative bg-[url('/src/assets/images/wave-background.svg')] bg-no-repeat m-4 rounded-lg bg-cover bg-center overflow-hidden h-[86vh] md:p-[3rem] md:rounded-none md:m-0 lg:h-screen xl:h-screen">
      <div className="flex flex-col justify-center h-full -mt-16 items-center md:-mt-5 md:max-w-full md:flex-row lg:ml-10 lg:-mt-20 lg:justify-evenly xl:pl-4 xl:justify-start 2xl:pr-4">
        <div className="md:order-2 md:flex md:w-[100%] lg:w-[55%] xl:w-1/2">
          <Lottie
            animationData={womanWorkingAnimation}
            className="w-[70%] overflow-hidden z-10 mt-5 sm:mt-7 m-auto md:-mt-5 md:w-[78.5%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]"
          />
        </div>
        <div className="flex flex-col text-center gap-y-5 mt-4 md:gap-y-4 lg:gap-y-2 xl:w-1/2 2xl:gap-y-4">
          <h1 className="text-[2.3rem] sm:text-[2.6rem] leading-normal font-semibold md:whitespace-nowrap md:mb-0 lg:-mr-20 lg:text-[3.9rem] 2xl:text-[5.5rem]">
            Hey, I&#39;m Gabrielle.
          </h1>
          <p className="text-2xl text-violet-500 font-medium md:mb-0 sm:text-[1.7rem] lg:mt-2 2xl:text-4xl 2xl:mt-3">
            A Full Stack Developer.
          </p>
          <div className="flex flex-col justify-center items-center md:mt-6">
            <Button
              href={cvLink}
              className="rounded-lg border-violet-500 bg-violet-500 py-2.5 px-5 text-white text-lg cursor-pointer font-medium  hover:bg-violet-600 active:shadow-md active:translate-y-2 sm:text-xl sm:py-3 md:mt-0 2xl:text-2xl 2xl:py-4 "
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
