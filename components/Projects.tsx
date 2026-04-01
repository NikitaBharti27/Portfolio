"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of my production-ready work, focusing on architecture, performance, and impact.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
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
                  className="glass p-6 md:p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:shadow-[0_8px_32px_rgba(251,146,60,0.2)] hover:border-primary/30 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full h-60 md:h-72 rounded-2xl overflow-hidden mb-6 bg-muted">
                    {/* Mockimg */}
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 z-10 transition-colors" />
                    
                    {/* Icons Float */}
                    <div className="absolute bottom-4 left-4 z-20 flex -space-x-3">
                      {project.iconLists.map((icon, index) => (
                        <div key={index} className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center p-2 opacity-90 backdrop-blur-md">
                          <img src={icon} alt="tech icon" className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2 md:line-clamp-3 mb-6 text-sm md:text-base flex-grow">
                    {project.des}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-sm font-medium text-primary truncate pr-4">
                      {project.category}
                    </span>
                    <button className="text-foreground bg-foreground/10 hover:bg-foreground/20 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all active:scale-95">
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
            className="fixed inset-0 z-[6000] flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-sm"
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
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground hover:bg-red-500/20 transition-all active:scale-90"
              >
                <FaTimes />
              </button>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{selectedProject.title}</h2>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:opacity-90 text-primary-foreground font-medium transition-all active:scale-95 shadow-lg">
                          Live Demo <FaExternalLinkAlt size={12} />
                        </a>
                        {selectedProject.githubLink && (
                          <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium transition-all active:scale-95">
                            Source Code <FaGithub size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                        {selectedProject.des}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-foreground text-xl font-semibold mb-3">Challenge</h4>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed relative z-10 glass p-5 rounded-2xl border-l-4 border-primary">
                        {selectedProject.challenge}
                      </p>
                    </div>

                  </div>

                  <div className="space-y-8">
                    <div className="glass p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-500/10 pointer-events-none transition-colors" />
                      <h4 className="text-foreground text-xl font-semibold mb-3">Action</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                        {selectedProject.action}
                      </p>
                    </div>

                    <div className="glass p-6 rounded-2xl border-primary/30 border shadow-[0_0_20px_rgba(251,146,60,0.1)] transition-all">
                      <h4 className="text-foreground text-xl font-semibold mb-3">Results</h4>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500 font-semibold leading-relaxed text-base">
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
