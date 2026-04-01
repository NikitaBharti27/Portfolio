"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const EDUCATION_DATA = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    year: "Aug 2023 - Present",
    grade: "CGPA: 7.82",
    icon: <FaGraduationCap className="text-xl text-orange-400" />,
    description: "Pursuing Bachelor of Technology with a focus on core computer science subjects."
  },
  {
    id: 2,
    degree: "Intermediate (12th Grade)",
    institution: "Kendriya Vidyalaya, Hakimpet, Secunderabad",
    year: "Apr 2022 - Mar 2023",
    grade: "Percentage: 81.8%",
    icon: <FaSchool className="text-xl text-violet-400" />,
    description: "Completed higher secondary education in Science stream."
  },
  {
    id: 3,
    degree: "Matriculation (10th Grade)",
    institution: "Kendriya Vidyalaya, Hakimpet, Secunderabad",
    year: "Apr 2020 - Mar 2021",
    grade: "Percentage: 92%",
    icon: <FaBook className="text-xl text-green-400" />,
    description: "Completed secondary education with excellent academic performance."
  }
];

export default function Education() {
  return (
    <Section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-foreground mb-4"
          >
            Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My formal education and foundational learning journey.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/50 via-violet-500/50 to-transparent"></div>

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-[20px] md:left-[44px] top-6 w-4 h-4 rounded-full bg-background border-[3px] border-primary shadow-[0_0_15px_rgba(251,146,60,0.5)] z-10 transition-colors">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
                </div>

                <div className="glass-card p-6 md:p-8 border border-transparent hover:border-border transition-all group overflow-hidden relative">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-2 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-foreground/5 border border-border group-hover:border-primary/30 transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground md:ml-auto shrink-0 bg-foreground/5 px-3 py-1 rounded-full border border-border">
                      {item.year}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-foreground opacity-80">{item.institution}</h4>
                    <p className="inline-block mt-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-primary">
                      {item.grade}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border/50 pt-4">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
