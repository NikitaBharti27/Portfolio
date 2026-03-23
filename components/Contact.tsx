"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ad527fd1-5df8-447d-a6d3-46601414e090");
    formData.append("subject", "New Contact Form Submission from Portfolio");
    formData.append("from_name", "Portfolio Notification");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage("Message sent successfully!");
        form.reset();
      } else {
        console.log("Error", data);
        setSubmitMessage(data.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.log("Error", error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 max-w-6xl mx-auto items-center">
          
          {/* Left Text Detail */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-1 text-white mb-6">Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">incredible.</span></h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              I&apos;m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>

            <div className="flex flex-col space-y-6">
              <a href="mailto:nikitabharti2116@gmail.com" className="group flex items-center space-x-4 w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors group-hover:scale-110 transform duration-300">
                  <FaEnvelope className="text-xl text-purple-400" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">nikitabharti2116@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/nikita-bharti-dev/" target="_blank" rel="noreferrer" className="group flex items-center space-x-4 w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors group-hover:scale-110 transform duration-300">
                  <FaLinkedin className="text-xl text-blue-400" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/nikita-bharti-dev/</span>
              </a>

              <a href="https://github.com/NikitaBharti27" target="_blank" rel="noreferrer" className="group flex items-center space-x-4 w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors group-hover:scale-110 transform duration-300">
                  <FaGithub className="text-xl text-gray-300" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">github.com/NikitaBharti27</span>
              </a>

              <a href="tel:+916301614559" className="group flex items-center space-x-4 w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-colors group-hover:scale-110 transform duration-300">
                  <FaPhone className="text-xl text-green-400" />
                </div>
                <span className="text-lg text-gray-300 group-hover:text-white transition-colors">+91 63016 14559</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-10"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 relative overflow-hidden group">
              {/* Form glowing border effect on hover */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-purple-500/30" />
              
              <h3 className="text-2xl font-semibold text-white mb-8">Send me a message</h3>

              <div className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-transparent"
                    placeholder="Name"
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label 
                    htmlFor="name" 
                    className={`absolute left-0 -top-3.5 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-400 ${focusedInput === "name" ? "text-purple-400" : "text-gray-400"}`}
                  >
                    Name
                  </label>
                  {/* Subtle Glow beneath input */}
                  {focusedInput === "name" && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />}
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                    placeholder="Email"
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label 
                    htmlFor="email" 
                    className={`absolute left-0 -top-3.5 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-400 ${focusedInput === "email" ? "text-blue-400" : "text-gray-400"}`}
                  >
                    Email
                  </label>
                  {focusedInput === "email" && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}
                </div>

                <div className="relative pt-4">
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="peer w-full bg-transparent border-b-2 border-white/20 px-0 py-3 text-white focus:outline-none focus:border-green-400 transition-colors placeholder-transparent resize-none"
                    placeholder="Message"
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label 
                    htmlFor="message" 
                    className={`absolute left-0 top-0 text-sm font-medium transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-400 ${focusedInput === "message" ? "text-green-400" : "text-gray-400"}`}
                  >
                    Message
                  </label>
                  {focusedInput === "message" && <div className="absolute bottom-[5px] left-0 w-full h-[2px] bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />}
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                type="submit" 
                disabled={isSubmitting}
                className="mt-10 w-full py-4 rounded-xl bg-white text-black font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : <>Send Message <FaPaperPlane /></>}
              </motion.button>

              {submitMessage && (
                <p className={`mt-6 text-center text-sm font-medium ${submitMessage.includes("success") ? "text-green-400" : "text-red-400"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
