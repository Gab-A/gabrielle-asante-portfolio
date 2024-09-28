import { useState } from "react";
import axios from "axios";
import Input from "../Input/Input";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loadingAnimation.json";
import Button from "../Button/Button";

export default function ContactForm() {
  const [contactFormData, setContactFormData] = useState({
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
        setContactFormData({
          email: "",
          subject: "",
          message: "",
        });
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
      <form
        onSubmit={handleSubmit}
        className="mr-4 mt-12 md:w-full md:mt-0 md:flex md:flex-col md:mx-0 md:justify-center"
      >
        <Input
          label="Email"
          htmlFor="email"
          id="email"
          type="email"
          name="email"
          placeholder="jane.smith@example.com"
          autoComplete="email"
          value={contactFormData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <Input
          label="Subject"
          htmlFor="subject"
          id="subject"
          type="text"
          name="subject"
          autoComplete="subject"
          placeholder="Subject of your email"
          value={contactFormData.subject}
          error={errors.subject}
          onChange={handleChange}
        />
        <Input
          label="Message"
          htmlFor="message"
          id="message"
          textarea="textarea"
          name="message"
          autoComplete="message"
          placeholder="Type your message here"
          value={contactFormData.message}
          error={errors.message}
          onChange={handleChange}
        />
        <div className="flex justify-center items-center">
          {isSubmitting ? (
            <Lottie animationData={loadingAnimation} className="w-1/4" />
          ) : (
            <Button className="bg-violet-300 py-2.5 px-10 text-gray-50 text-lg hover:opacity-95 hover:text-violet-500">
              Submit
            </Button>
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
