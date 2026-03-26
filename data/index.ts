// import { link } from "fs";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build scalable, production-ready MERN stack applications",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones & ready for global remote work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently mastering Data Structures & Algorithms",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 -bottom-5 md:w-96 w-80  max-md:-bottom-28  max-md:-right-25",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b52.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to add value to your engineering team?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bond&Bites - Restaurant Order Management",
    des: "Designed and developed a modular MERN-based order management system with JWT authentication and end-to-end menu/order CRUD, improving API performance by 35% through optimized routing and MongoDB indexing.",
    img: "/bond&bites.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg"],
    link: "https://github.com/NikitaBharti27",
    githubLink: "https://github.com/NikitaBharti27",
    category: "Full Stack",
    challenge: "Developing a responsive frontend cutting state re-renders by 30% and enhancing UI smoothness.",
    action: "Developed a responsive frontend with React, Redux Toolkit, Tailwind CSS, and Framer Motion.",
    result: "Strengthened backend reliability by implementing centralized error-handling middleware, clean validation layers, and structured business logic to ensure consistent and maintainable API behavior."
  },
  {
    id: 2,
    title: "ReportIT - Neighbourhood Watch & Incident Reporting Platform",
    des: "Built a full-stack MERN incident reporting platform with JWT authentication and role-based access control, streamlining community issue tracking and administrative resolution workflows.",
    img: "/reportit.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg"],
    link: "https://github.com/NikitaBharti27",
    githubLink: "https://github.com/NikitaBharti27",
    category: "Full Stack",
    challenge: "Architected scalable REST APIs with a modular controller-service structure, improving maintainability and enabling efficient incident tracking, media handling, and analytics.",
    action: "Built APIs and a modular controller-service structure.",
    result: "Optimized MongoDB queries using indexing and designed a responsive React + Tailwind dashboard, enhancing data retrieval speed and overall user experience."
  },
  {
    id: 3,
    title: "Personal Library Tracker",
    des: "Architected and deployed a full-stack MERN application with JWT authentication and protected routes, enabling secure CRUD operations and personalized book management dashboards.",
    img: "/lib.png",
    iconLists: ["/re.svg", "/tail.svg", "/node.svg", "/mongo.svg"],
    link: "https://github.com/NikitaBharti27",
    githubLink: "https://github.com/NikitaBharti27",
    category: "Full Stack",
    challenge: "Improved frontend performance by optimizing React rendering and implementing dynamic search & category filters, reducing unnecessary re-renders by 35% and enhancing cross-device responsiveness.",
    action: "Architected a full-stack MERN app with JWT auth.",
    result: "Engineered modular REST APIs and optimized MongoDB queries using indexing and lean operations, reducing average API response time from 280ms to 160ms (40% improvement) under load testing."
  }
];

export const companies = [];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NikitaBharti27"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nikita-bharti-dev/"
  },
];