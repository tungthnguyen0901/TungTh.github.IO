import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    const emailData = {
      ...formData,
      to_email: formData.email, // User's email
    };
  
    const ownerData = {
      ...formData,
      to_email: "tungthnguyen0901@gmail.com", // Your email
    };
  
    // Send email to the user
    emailjs
      .send("service_7owfhcx", "template_29odedq", emailData, "v1uZN7kNlebmY2dve")
      .then(
        () => {
          // Send email to the owner
          return emailjs.send(
            "service_7owfhcx",
            "template_cw815sd",
            ownerData,
            "v1uZN7kNlebmY2dve"
          );
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className = "bg-gradient-to-b from-customColorHigh via-customColorMid to-customColor">
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          disabled={status === "Sending..."}
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && <p className="text-center mt-4 text-sm text-gray-700">{status}</p>}
    </div>
    </div>
  );
};

export default ContactForm;
