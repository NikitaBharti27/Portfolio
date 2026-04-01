"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaUser, FaRoute, FaLightbulb } from "react-icons/fa";

const aboutData = [
  {
    id: "intro",
    title: "Who I Am",
    icon: <FaUser className="text-orange-400 text-xl" />,
    description: "I am a Full-Stack MERN Developer passionate about creating seamless, high-performance web applications. I bridge the gap between complex backend logic and beautiful, intuitive user interfaces.",
    delay: 0.1,
  },
  {
    id: "journey",
    title: "How I Started",
    icon: <FaRoute className="text-violet-400 text-xl" />,
    description: "My journey began with a deep curiosity for how the web works, leading me to pursue a B.Tech in CSE. Through constant building, learning, and open-source contributions, I honed my skills in scalable architecture.",
    delay: 0.3,
  },
  {
    id: "philosophy",
    title: "My Philosophy",
    icon: <FaLightbulb className="text-yellow-400 text-xl" />,
    description: "I believe software shouldn't just work—it should feel alive. I prioritize real-time responsiveness, clean code, and user-centric design to build systems that scale gracefully.",
    delay: 0.5,
  },
];

export default function About() {
  return (
    <Section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-foreground mb-4"
          >
            About Me
          </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
            A glimpse into my background, journey, and the principles that guide my work.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left Content: Vertical Timeline */}
          <div className="relative order-2 lg:order-1 lg:pr-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>

            <div className="space-y-10 relative">
              {aboutData.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="relative pl-12 lg:pl-16"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 lg:left-6 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center transform -translate-x-1/2 z-10 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 md:p-8 border border-transparent hover:border-border transition-all cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2.5 glass rounded-xl inline-flex">{item.icon}</div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] lg:aspect-square group">
              {/* Decorative background shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 to-violet-500/30 rounded-[2rem] transform rotate-6 scale-105 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-bl from-violet-500/20 to-amber-500/20 rounded-[2rem] transform -rotate-3 scale-105 group-hover:-rotate-6 transition-transform duration-500" />

              <div className="absolute inset-0 bg-background border border-border rounded-[2rem] overflow-hidden glass-card z-10 flex items-center justify-center transition-colors">
                {/* Fallback Icon */}
                <FaUser className="absolute text-7xl text-foreground/5 -z-10" />

                <img
                  src="/profile.jpeg"
                  alt="Professional Headshot"
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
