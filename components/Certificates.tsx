"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const CERTIFICATES_DATA = [
  {
    id: 1,
    name: "Social Networks",
    issuer: "NPTEL",
    date: "Oct 2025",
    link: "#",
    icon: <FaAward className="text-blue-400 text-3xl" />
  },
  {
    id: 2,
    name: "MERN Stack",
    issuer: "Cipher Schools",
    date: "Jul 2025",
    link: "#",
    icon: <FaAward className="text-purple-400 text-3xl" />
  },
  {
    id: 3,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    link: "#",
    icon: <FaAward className="text-orange-400 text-3xl" />
  }
];

export default function Certificates() {
  return (
    <Section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-4"
          >
            Certificates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Professional milestones validating my expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="glass p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:border-white/30 hover:bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none -mr-10 -mt-10"></div>
                
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  {cert.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-gray-200 transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-gray-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-xs mb-8">
                  {cert.date}
                </p>

                <div className="mt-auto">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-white text-sm font-medium hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    View Credential <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
