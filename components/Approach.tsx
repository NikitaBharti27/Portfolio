"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/ui/canvasReveal";
import { div } from "motion/react-client";

export default function Approach() {
  return (
    <section className="w-full py-20 " id="approach">
        <h2 className="heading-2 text-center mb-10">My <span className="text-primary">Approach</span></h2>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center   gap-4 ">
        <Card 
        title="Planning & Strategy"
        description="I prioritize rigorous requirement analysis and architectural planning. This phase involves defining the database schema, selecting the optimal tech stack, and mapping out scalable system logic before writing a single line of code." 
        icon={<AceternityIcon order="Phase 1"/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
        title="Development & Implementation"
        description="I focus on writing clean, modular, and maintainable code. Key emphasis is placed on efficient state management, component reusability, and adhering to industry-standard coding practices to build robust applications." 
        icon={<AceternityIcon order="Phase 2"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card 
        title="Testing & Deployment"
        description="I ensure application stability through comprehensive testing and performance optimization. The final stage involves setting up CI/CD pipelines and deploying the application to cloud environments for maximum reliability.." 
        icon={<AceternityIcon order="Phase 3"/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className="border border-border/20 group/canvas-card flex items-center justify-center dark:border-white/10 max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl transition-all hover:border-primary/30"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground/50 transition-colors group-hover/canvas-card:text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground/50 transition-colors group-hover/canvas-card:text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground/50 transition-colors group-hover/canvas-card:text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground/50 transition-colors group-hover/canvas-card:text-primary" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          style={{
            opacity: hovered ? 0 : undefined,
            transform: hovered
              ? "translate(-50%, -50%) translateY(-1rem)"
              : undefined,
          }}
        >
          {icon}
        </div>
        <h2
          className="text-foreground opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-foreground group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl"
          style={{
            opacity: hovered ? 1 : undefined,
            transform: hovered ? "translateY(-0.5rem)" : undefined,
          }}
        >
          {title}
        </h2>
        <h2
          className="text-sm text-foreground/70 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-medium group-hover/canvas-card:-translate-y-2 transition duration-200 text-center px-4"
          style={{
            opacity: hovered ? 1 : undefined,
            transform: hovered ? "translateY(-0.5rem)" : undefined,
          }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order} : {order?: string}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-95">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FBBF24_0%,#EA580C_50%,#FBBF24_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background font-bold px-5 py-1 text-foreground backdrop-blur-3xl text-2xl transition-colors">
                {order}
            </span>
        </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
