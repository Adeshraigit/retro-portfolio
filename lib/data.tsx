import { HomeIcon, NotebookIcon, Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";

export const DATA = {
  name: "Adesh Rai",
  initials: "AR",
  url: "https://adeshrai.me",
  location: "Mumbai",
  locationLink: "",
  description:
    "I design and build innovative web solutions with a focus on simplicity, performance, and user experience.",
  summary:
    "Full-stack developer skilled in Next.js, React, Node.js, and TypeScript, with experience leading end-to-end development of scalable web applications, including an LMS for AISKOOL. Experienced in AI chatbot projects and freelance development, with a strong focus on performance, usability, and effective collaboration.",
  avatarUrl: "/profile-photo.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "TailwindCSS",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adeshrai707@gmail.com",
    tel: "+7304012624",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Adeshraigit",
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adeshrai",
        icon: Linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adeshrai707",
        icon: Twitter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "",
        icon: Mail,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Discover Technologies",
      href: "https://www.discovertechnologies.co.in/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/Nighwan.png",
      start: "June 2024",
      end: "November 2025",
      description:
        "Led the end-to-end development and delivery of AISKOOL’s scalable LMS at Discover Technologies, owning full-stack implementation and requirements in close collaboration with the team.",
    },
    {
      company: "Nighwan Technologies PVT. LTD.",
      href: "https://nighwantech.com/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/Nighwan.png",
      start: "October 2024",
      end: "April 2025",
      description:
        "Collaborated on Angular, React, TypeScript, and Node.js projects while optimizing performance and building scalable solutions.",
    },
    {
      company: "Elight Labs",
      href: "https://elightlabs.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/Elight.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "Built responsive frontend experiences across multiple projects and collaborated with the team to deliver polished, usable interfaces.",
    },
  ],
  education: [
    {
      school: "Saraswati College of Engineering",
      href: "",
      degree: "B.E in CSE(AI&ML)",
      logoUrl: "",
      start: "2025",
      end: "2028",
    },
    {
      school: "Vidyalankar Polytechnic",
      href: "https://vpt.edu.in/",
      degree: "Diploma in Computer Engineering",
      logoUrl: "",
      start: "2022",
      end: "2025",
    },
    {
      school: "V.B.M Model High School",
      href: "",
      degree: "10th SSC",
      logoUrl: "",
      start: "2012",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Smart Chat Bot",
      href: "https://next-js-music-phi.vercel.app",
      dates: "",
      active: true,
      description:
        "An engineering-admission assistant powered by retrieval-augmented generation and vector search, built with Next.js, DataStax, and OpenAI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Next UI",
        "Datastax",
        "OpenAI"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Rag-model",
          icon: <Globe className="size-3" />
        },
      ],
      image: "/chat.png",
      video:
        "",
    },
    {
      title: "Product-Store",
      href: "https://product-store-jeot.onrender.com",
      dates: "",
      active: true,
      description:
        "A full-stack product catalog and store experience built with MongoDB, Express, React, and Node.js.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Product-Store",
          icon: <Globe className="size-3" />
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Music App",
      href: "https://next-js-music-phi.vercel.app",
      dates: "",
      active: true,
      description:
        "An immersive music discovery experience built with Next.js, Tailwind CSS, and Aceternity UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://next-js-music-phi.vercel.app",
          icon: <Globe className="size-3" />
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Next.JS",
          icon: <Globe className="size-3" />
        },
      ],
      image: "/music.png",
      video:
        "",
    },
    {
      title: "Todo App",
      href: "https://todo-reactjs-appp.netlify.app/",
      dates: "",
      active: true,
      description:
        "A focused task-management experience built with React and Tailwind CSS.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://todo-reactjs-appp.netlify.app",
          icon: <Globe className="size-3" />
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/React-Project/tree/main/todo",
          icon: <Globe className="size-3" />
        },
      ],
      image: "/todo.png",
      video:
        "",
    },
    {
      title: "Video Editor Portfolio",
      href: "https://adityaraut-portfolio.vercel.app/",
      dates: "",
      active: true,
      description:
        "A cinematic portfolio for a video editor, built with Next.js, Tailwind CSS, and Aceternity UI.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Aceternity UI"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://adityaraut-portfolio.vercel.app/",
          icon: <Globe className="size-3" />
        },
        {
          type: "Github",
          href: "https://github.com/Adeshraigit/Adi-portfolio",
          icon: <Globe className="size-3" />
        },
      ],
      image: "/adi.png",
      video:
        "",
    },
    {
      title: "The Coffee Shop",
      href: "https://the-coffee-shopp.netlify.app",
      dates: "",
      active: true,
      description:
        "An animated coffee-shop landing page built with HTML, CSS, JavaScript, and GSAP.",
      technologies: [
        "Html",
        "CSS",
        "Javascript",
        "GSAP"
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://the-coffee-shopp.netlify.app",
          icon: <Globe className="size-3" />
        },
        
      ],
      image: "/coffee.png",
      video:
        "",
    },
  ],
} as const;
