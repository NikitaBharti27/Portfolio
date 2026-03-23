"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "@/components/ui/Typewriter";

const ROLES = [
  "Full Stack Engineer",
  "Real-Time Systems Developer",
  "Open Source Contributor",
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Cursor Follow Glow */}
      <motion.div
        className="pointer-events-none hidden md:block absolute w-[400px] h-[400px] rounded-full blur-[100px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(120,119,198,0.15) 0%, rgba(0,0,0,0) 70%)",
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
                Available for new opportunities
              </span>
            </div>

            <h1 className="heading-1 text-white">
              Hi, I&apos;m <span className="text-white">Nikita Bharti</span>
            </h1>

            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-3xl font-medium text-gray-300">
                <Typewriter words={ROLES} />
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Engineering <span className="text-white">real-time systems</span> &{" "}
              <span className="text-white">scalable experiences</span> that feel instant. 
              I build robust MERN stack applications using modern architecture.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projects" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-gray-200">
                <span>View Projects</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
               <a href="/resume.pdf" download="Nikita_Bharti_Resume.pdf" target="_blank" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium text-white backdrop-blur hover:bg-white/10 transition-colors">
                <FaDownload className="mr-2" /> Resume
              </a>
              <div className="flex items-center gap-4 ml-0 md:ml-4">
                <a href="https://github.com/NikitaBharti27" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-purple-400 transition-colors cursor-pointer relative z-20">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/nikita-bharti-dev/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-blue-400 transition-colors cursor-pointer relative z-20">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Floating Code Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto"
          >
            {/* Anti-gravity floating animation */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card relative overflow-hidden"
            >
              {/* MacOS style window controls */}
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-500 font-mono">developer.json</div>
              </div>
              
              {/* Code Editor Content */}
              <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed">
                <pre>
                  <code className="text-gray-300">
{`{
  "`}<span className="text-purple-400">name</span>{`": "`}<span className="text-green-400">Nikita Bharti</span>{`",
  "`}<span className="text-purple-400">role</span>{`": "`}<span className="text-green-400">Full-Stack Developer</span>{`",
  "`}<span className="text-purple-400">focus</span>{`": [
    "`}<span className="text-blue-300">Real-Time Systems</span>{`",
    "`}<span className="text-blue-300">Scalable Backends</span>{`",
    "`}<span className="text-blue-300">Interactive UIs</span>{`"
  ],
  "`}<span className="text-purple-400">stack</span>{`": {
    "`}<span className="text-blue-400">frontend</span>{`": "React, Tailwind, Redux",
    "`}<span className="text-blue-400">backend</span>{`": "Node.js, Express",
    "`}<span className="text-blue-400">database</span>{`": "MongoDB",
    "`}<span className="text-blue-400">languages</span>{`": "JavaScript, C/C++, Java"
  },
  "`}<span className="text-purple-400">status</span>{`": "`}<span className="text-yellow-300">Building the future</span>{`"
}`}
                  </code>
                </pre>
              </div>

              {/* Decorative reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay border border-white/5 rounded-2xl"></div>
            </motion.div>

            {/* Floating ornamental elements */}
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 -bottom-6 glass p-4 rounded-xl hidden md:block"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-medium text-gray-300">Production Ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}