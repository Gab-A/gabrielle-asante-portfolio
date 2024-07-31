import Lottie from "lottie-react";
import womanWorkingAnimation from "../../assets/animations/heroAnimation.json";

export default function Hero() {
  const cvLink =
    "https://docs.google.com/document/d/10D9hdBkLzkorl7hwmGyPE1UYbFYVYGHN/edit?usp=sharing&ouid=117175190293271690444&rtpof=true&sd=true";

  return (
    <section className="bg-violet-50 p-3 rounded-lg m-4">
      <div className="flex flex-col justify-center items-center">
        <Lottie
          animationData={womanWorkingAnimation}
          className="w-3/4 overflow-hidden z-10 m-auto"
        />
        <h1 className="text-5xl leading-normal font-semibold mb-6 text-center">
          Hey, I&#39;m Gabrielle.
        </h1>
        <p className="text-2xl border-violet-500 border-solid text-violet-500 font-medium mb-2">
          A Full Stack Developer.
        </p>
        <div className="flex flex-col justify-center items-center mt-5">
          <button className="rounded-lg border bg-violet-500 py-2.5 px-5 text-white twxt-lg cursor-pointer font-medium mb-4 mt-3">
            <a href={cvLink} target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
