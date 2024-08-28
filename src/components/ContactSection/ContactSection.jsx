import ContactForm from "../ContactForm/ContactForm";
import contactImage from "../../assets/images/contact.svg";

export default function ContactSection() {
  return (
    <section id="contact">
      <h2 className="ml-4 text-4xl font-medium mb-8">
        Contact Me<span className="text-violet-300 text-5xl">.</span>
      </h2>
      <div>
        <img src={contactImage} alt="contact-image" className="w-3/5 mx-auto" />
      </div>
      <ContactForm />
    </section>
  );
}
