"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { 
  SiJavascript, SiTypescript, SiCplusplus, SiC,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiCloudinary,
  SiGithub, SiGit, SiNetlify, SiRender, SiPostman, SiGoogle, SiVercel, SiSocketdotio
} from "react-icons/si";
import { FaJava, FaLightbulb, FaTasks, FaClock } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, level: 90 },
      { name: "C", icon: <SiC className="text-blue-600" />, level: 85 },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" />, level: 85 },
      { name: "Java (Basics)", icon: <FaJava className="text-orange-500" />, level: 75 },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" />, level: 90 },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 90 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 85 },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
      { name: "REST APIs", icon: <SiNodedotjs className="text-gray-400" />, level: 90 },
      { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" />, level: 85 },
      { name: "Socket.io", icon: <SiSocketdotio className="text-white" />, level: 80 },
    ]
  },
  {
    title: "Tools/Platforms",
    skills: [
      { name: "GitHub", icon: <SiGithub className="text-white" />, level: 90 },
      { name: "Git", icon: <SiGit className="text-red-500" />, level: 90 },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" />, level: 85 },
      { name: "Render", icon: <SiRender className="text-black" />, level: 85 },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: 90 },
      { name: "Vercel", icon: <SiVercel className="text-white" />, level: 85 },
    ]
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            The tools, languages, and frameworks I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all cursor-pointer"
                  >
                    <div className="text-3xl md:text-4xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>

                    <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full rounded-b-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
