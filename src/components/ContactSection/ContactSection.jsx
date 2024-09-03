import ContactForm from "../ContactForm/ContactForm";
import contactImage from "../../assets/images/contact.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin-original.svg";

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="ml-4 text-4xl font-medium mb-8">
        Contact Me<span className="text-violet-300 text-5xl">.</span>
      </h2>
      <div>
        <img
          src={contactImage}
          alt="contact-image"
          className="w-3/5 mx-auto mb-8"
        />
        <div className="flex items-center gap-1">
          <a
            href="mailto:asante.gabrielle@gmail.com"
            className="ml-4 text-zinc-500 hover:underline cursor-pointer text-[15.5px]"
          >
            asante.gabrielle@gmail.com
          </a>
          <a
            href="https://github.com/Gab-A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github-icon"
              className="w-6 cursor-pointer"
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
              className="w-6 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
