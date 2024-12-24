"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectLabel, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  // State to manage form inputs, including the selected service
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "", // Default value set to 'Web development'
  });

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false); // For popup visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Concatenate firstName and lastName into one field called 'name'
    const { firstName, lastName, email, phone, message, service } = formData;
    const fullName = `${firstName} ${lastName}`;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fullName, email, phone, message, service }), // Send fullName here
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "", service: "" }); // Reset form

        // Show popup
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false); // Hide popup after 9 seconds
        }, 9000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle the change of the selected service
  const handleServiceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+212) 691-425501",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "Soufiane.1refai@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Morocco, Rabat Sale",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-8 xl:py-20 xl:mt-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272C] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent-default">Let's work together</h3>
              <p className="text-white/60">
                Reach out for collaborations or inquiries. Fill out the form, and we’ll get back to you promptly!
              </p>
              <div className="gap-6 grid-cols-1 md:grid-cols-2 grid">
                <Input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web development">Web development</SelectItem>
                    <SelectItem value="Problem Solving">Problem Solving</SelectItem>
                    <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                    <SelectItem value="Consulting & Training">Consulting & Training</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
            {status && <p>{status}</p>}
            <h2>sr: {formData.service}</h2>
          </div>

          {/* Personal Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent-default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Popup for success message */}
      {showPopup && (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-[#27272C] p-8 rounded-lg shadow-xl max-w-md mx-auto text-white">
      <h3 className="text-xl text-center">Message Sent Successfully!</h3>
      <p className="text-center mt-2">We will get back to you soon.</p>
      <Button
        className="mt-4 mx-auto block bg-accent-default text-white hover:bg-accent-dark"
        onClick={() => setShowPopup(false)}
      >
        Close
      </Button>
    </div>
  </div>
)}

    </motion.section>
  );
};

export default Contact;
