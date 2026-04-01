"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaCloud, FaServer, FaCogs } from "react-icons/fa";

const TRAINING_DATA = [
  {
    id: 1,
    title: "Full-Stack Development (MERN Stack)",
    institution: "Cipher Schools",
    date: "Jun 2025 - Jul 2025",
    icon: <FaServer className="text-orange-400 text-3xl" />,
    points: [
      "Developed full-stack web applications using the MERN stack, implementing JWT-based authentication, RESTful APIs, and MongoDB integration to build secure and scalable systems.",
      "Crafted responsive UI components in React.js with Tailwind CSS and integrated Framer Motion for smooth interactions.",
      "Collaborated in an agile development team, participating in weekly sprints and code reviews, achieving 100% on-time delivery of project milestones."
    ]
  }
];

export default function Training() {
  return (
    <Section id="training" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-foreground mb-4"
          >
            Experience & Training
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Intensive technical training and hands-on workshops.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {TRAINING_DATA.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all shadow-sm"
            >
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>

              <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-foreground/5 border border-border transition-colors shadow-sm flex items-center justify-center">
                    {training.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {training.title}
                      </h3>
                      <h4 className="text-lg text-muted-foreground font-medium">
                        {training.institution}
                      </h4>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 w-fit">
                      {training.date}
                    </span>
                  </div>

                  <ul className="space-y-4 mt-6">
                    {training.points.map((point, i) => (
                      <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-3 text-foreground/80 leading-relaxed group/li">
                        <span className="text-primary pt-1 shrink-0 group-hover/li:scale-110 transition-transform"><FaServer size={14} /></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
