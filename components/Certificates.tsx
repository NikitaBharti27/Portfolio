"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "@/components/ui/Section";
import { FaAward, FaExternalLinkAlt, FaTimes, FaAward as FaCertificate } from "react-icons/fa";
import Image from "next/image";

const CERTIFICATES_DATA = [
  {
    id: 1,
    name: "Social Networks",
    issuer: "NPTEL",
    date: "Oct 2025",
    description: "Comprehensive course on social network analysis, graph theory, and dynamics of networks.",
    image: "/Nptel.png",
    link: "#",
    icon: <FaAward className="text-blue-400 text-3xl" />
  },
  {
    id: 2,
    name: "MERN Stack",
    issuer: "Cipher Schools",
    date: "Jul 2025",
    description: "Intensive training in MongoDB, Express.js, React, and Node.js for full-stack development.",
    image: "/mern.png",
    link: "#",
    icon: <FaCertificate className="text-purple-400 text-3xl" />
  },
  {
    id: 5,
    name: "Hackathon Participant",
    issuer: "Developer Community",
    date: "Sep 2024",
    description: "Collaborated in intensive coding challenges to develop innovative tech solutions.",
    image: "/hackathon.png",
    link: "#",
    icon: <FaAward className="text-red-400 text-3xl" />
  },
  {
    id: 4,
    name: "Introduction to Public Speaking",
    issuer: "MOOC",
    date: "Aug 2024",
    description: "Techniques for effective communication, presentation, and audience engagement.",
    image: "/mooc.png",
    link: "#",
    icon: <FaAward className="text-green-400 text-3xl" />
  },
  {
    id: 3,
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    description: "Mastery of HTML5, CSS3, Flexbox, and Grid for creating responsive web pages.",
    image: "/freecodecamp.png",
    link: "#",
    icon: <FaAward className="text-orange-400 text-3xl" />
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES_DATA[0] | null>(null);

  return (
    <Section id="certificates" className="py-24 relative overflow-hidden">
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
            Professional milestones and skill validations from various platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full flex flex-col"
            >
              <div 
                className="glass-card flex flex-col h-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border-white/5 hover:border-white/20 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={cert.image} 
                    alt={cert.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-lg bg-black/50 backdrop-blur-md border border-white/10">
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shrink-0">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed border-t border-white/5 pt-4">
                    {cert.description}
                  </p>

                  <button 
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white text-sm font-semibold hover:from-blue-600/30 hover:to-purple-600/30 border border-white/10 hover:border-white/20 transition-all group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                  >
                    View Certificate <FaExternalLinkAlt className="text-[10px]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[6000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-xl"
              >
                <FaTimes size={20} />
              </button>
              
              <div className="relative w-full h-full p-4 md:p-8">
                <Image 
                  src={selectedCert.image} 
                  alt={selectedCert.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl shadow-2xl"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCert.name}</h3>
                <p className="text-blue-400 font-medium mb-1">{selectedCert.issuer} • {selectedCert.date}</p>
                <p className="text-gray-400 max-w-2xl">{selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
