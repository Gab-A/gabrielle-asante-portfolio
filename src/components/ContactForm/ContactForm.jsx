import { useState } from "react";
import axios from "axios";
import Input from "../Input/Input";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loadingAnimation.json";

export default function ContactForm() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const handleChange = (event) => {
    setContactFormData((prevContactFormData) => {
      return {
        ...prevContactFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const newErrors = {};

  const validateForm = () => {
    if (!contactFormData.name) {
      newErrors.name = "Name is required.";
    }
    if (!contactFormData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!contactFormData.subject) {
      newErrors.subject = "Subject is required.";
    }
    if (!contactFormData.message) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await axios.post(
        `https://formspree.io/f/${formspreeId}`,
        contactFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setStatusMessage("Message sent successfully!");
        setTimeout(() => {
          setStatusMessage(false);
        }, 1500);
        setContactFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatusMessage("Failed to send message.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-4 mt-6 w[95%]">
        <Input
          label="Name"
          type="text"
          name="name"
          value={contactFormData.name}
          error={errors.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={contactFormData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Input
          label="Subject"
          type="text"
          name="subject"
          value={contactFormData.subject}
          error={errors.subject}
          onChange={handleChange}
        />
        <Input
          label="Message"
          textarea="textarea"
          name="message"
          value={contactFormData.message}
          error={errors.message}
          onChange={handleChange}
        />
        <div className="flex justify-center items-center">
          {isSubmitting ? (
            <Lottie animationData={loadingAnimation} className="w-1/4" />
          ) : (
            <button className="rounded-lg border bg-violet-300 py-2.5 px-10 text-gray-50 text-lg cursor-pointer mb-4 mt-3 hover:opacity-95 active:shadow-md active:translate-y-2">
              Submit
            </button>
          )}
        </div>
      </form>
      {
        <div className="flex justify-center items-center">
          <p className="text-green-500 mt-3.5 mb-8">{statusMessage}</p>
        </div>
      }
    </>
  );
}
