import { useState } from "react";
import axios from "axios";

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
      <form onSubmit={handleSubmit}></form>
    </>
  );
}
