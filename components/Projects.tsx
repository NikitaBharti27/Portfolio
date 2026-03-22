"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend", "Open Source"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <Section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my production-ready work, focusing on architecture, performance, and impact.
          </motion.p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-md
                ${activeCategory === category 
                  ? "bg-purple-500/20 border-purple-500 text-white" 
                  : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20"}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative h-full"
              >
                <div 
                  className="glass p-6 md:p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:shadow-[0_8px_32px_rgba(120,119,198,0.2)] hover:border-purple-500/30 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden mb-6 bg-[#13162D]">
                    {/* Mockimg */}
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-80 z-10" />
                    
                    {/* Icons Float */}
                    <div className="absolute bottom-4 left-4 z-20 flex -space-x-3">
                      {project.iconLists.map((icon, index) => (
                        <div key={index} className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center p-2 opacity-90 backdrop-blur-md">
                          <img src={icon} alt="tech icon" className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 line-clamp-2 md:line-clamp-3 mb-6 text-sm md:text-base flex-grow">
                    {project.des}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-sm font-medium text-blue-400 truncate pr-4">
                      {project.category}
                    </span>
                    <button className="text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors">
                      Details <FaExternalLinkAlt className="text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal / Advanced UI */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 100, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-card overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-500/30 transition-colors"
              >
                <FaTimes />
              </button>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                          Live Demo <FaExternalLinkAlt size={12} />
                        </a>
                        {selectedProject.githubLink && (
                          <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                            Source Code <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {selectedProject.des}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white text-xl font-semibold mb-3">Challenge</h4>
                      <p className="text-sm text-gray-400 font-mono leading-relaxed relative z-10 glass p-5 rounded-2xl border-l-4 border-blue-500">
                        {selectedProject.challenge}
                      </p>
                    </div>

                  </div>

                  <div className="space-y-8">
                    <div className="glass p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none" />
                      <h4 className="text-white text-xl font-semibold mb-3">Action</h4>
                      <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                        {selectedProject.action}
                      </p>
                    </div>

                    <div className="glass p-6 rounded-2xl border-purple-500/30 border shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                      <h4 className="text-white text-xl font-semibold mb-3">Results</h4>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 font-semibold leading-relaxed text-base">
                        ✦ {selectedProject.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
