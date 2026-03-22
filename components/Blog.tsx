"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaArrowRight } from "react-icons/fa";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Optimizing Real-Time WebSockets in Node.js",
    preview: "How we scaled to 10k concurrent connections using Redis pub/sub and reduced latency by 30%.",
    date: "March 15, 2026",
    readTime: "5 min read",
    link: "#",
    category: "Architecture"
  },
  {
    id: 2,
    title: "Why Framer Motion is the Future of UI Interactions",
    preview: "A deep dive into declarative animations, performance caveats, and orchestrating complex layout changes.",
    date: "February 28, 2026",
    readTime: "8 min read",
    link: "#",
    category: "Frontend"
  },
  {
    id: 3,
    title: "From MERN to Next.js App Router: A Migration Story",
    preview: "Lessons learned migrating a monolithic React app to server components, caching strategies, and SEO wins.",
    date: "January 14, 2026",
    readTime: "6 min read",
    link: "#",
    category: "Full Stack"
  }
];

export default function Blog() {
  return (
    <Section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 text-white mb-4"
            >
              Writing & <span className="text-purple-400">Case Studies</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 leading-relaxed"
            >
              Thoughts on software engineering, system design, and the occasional debugging rabbit hole.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="group flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            View all posts 
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-purple-400" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.a
              href={post.link}
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel flex flex-col h-full bg-white/[0.02] hover:bg-white/[0.05] transition-all p-8 relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {post.preview}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                  {post.date}
                </span>
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
