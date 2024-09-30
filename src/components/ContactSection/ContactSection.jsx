import ContactForm from "../ContactForm/ContactForm";
import contactImage from "../../assets/images/contact-email.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin-original.svg";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="flex items-center gap-8 md:mb-10">
        <h2 className="text-4xl font-medium whitespace-nowrap mb-5 md:text-[2.2rem] lg:text-5xl">
          Contact Me<span className="text-violet-300 text-5xl">.</span>
        </h2>
        <div className="w-full border-t-[1.5px] border-neutral-800"></div>
      </div>
      <div className="md:flex md:gap-24">
        <div className="flex flex-col justify-center items-center md:w-fit md:justify-start md:overflow-hidden md:space-y-8">
          <img
            src={contactImage}
            alt="contact-image"
            className="w-1/2 sm:w-72 mb-8 mt-4 md:w-60 md:m-0"
          />
          <div className="flex items-center gap-1 md:w-fit md:mt-5 md:flex-col">
            <a
              href="mailto:asante.gabrielle@gmail.com"
              className=" text-zinc-500 hover:underline cursor-pointer text-[15.5px]"
            >
              asante.gabrielle@gmail.com
            </a>
            <div className="flex gap-0.5 md:gap-1.5 md:pt-2">
              <a
                href="https://github.com/Gab-A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github-icon"
                  className="w-6 cursor-pointer md:w-7"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielle-asante/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin-icon"
                  className="w-6 cursor-pointer md:w-7"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 -mt-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
