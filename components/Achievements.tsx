"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaCode, FaTrophy } from "react-icons/fa";

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Competitive Programming",
    date: "Oct 2023 - Present",
    icon: <FaCode className="text-yellow-400 text-3xl" />,
    description: "Solved 200+ DSA problems across multiple coding platforms and maintained a 99+ day coding streak, strengthening analytical thinking and time-complexity optimization skills."
  },
  {
    id: 2,
    title: "Coding Badges",
    date: "Multiple",
    icon: <FaTrophy className="text-violet-400 text-3xl" />,
    description: "Earned multiple badges on LeetCode and HackerRank in C++ and other programming languages."
  }
];

export default function Achievements() {
  return (
    <Section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-foreground mb-4"
          >
            Achievements
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Milestones and competitive programming highlights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="glass-card p-8 h-full flex flex-col hover:border-border hover:bg-foreground/5 transition-all shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-foreground/5 border border-border shadow-inner">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{achievement.title}</h3>
                    <span className="text-sm text-primary font-medium tracking-wide uppercase px-3 py-1 bg-primary/10 rounded-full border border-primary/20 transition-colors">
                      {achievement.date}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed md:text-lg">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
