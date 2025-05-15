import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lakshmi Deepthi Kurugundla",
  initials: "LK",
  url: "https://laks.io",
  description:
    "Actively looking for opportunities in AI/ML and Generative AI.",
  summary:
    "I'm a computer science graduate with a passion for artificial intelligence and product-driven innovation. I began my journey at IIIT Sri City, where I co-authored a research paper on multi-source domain adaptation, published at ICONIP 2021.\n\n" +
    "After gaining hands-on experience as a software engineer at fast-paced startups like Groww, I pursued my M.S. in Computer Science at UMass Amherst. There, I led research on secure model inference at Adobe and gained practical industry exposure through experience at Nuviso Networks, where I contributed to real-time asset tracking systems.\n\n" +
    "Along the way, I've built and launched full-stack AI products, including Neovie, a GLP-1–centric health assistant leveraging generative models, and ReflectOn, a voice-based self-reflection app powered by GPT-4o and Whisper. My work blends LLMs, personalization engines, and cloud-native infrastructure to create adaptive, human-centered tools.\n\n" +
    "I'm currently seeking opportunities in Generative AI, ML engineering, or AI product development, where I can continue turning cutting-edge research into impactful real-world systems.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Java",
    "C",
    "SQL",
    "JavaScript",
    "TypeScript",
    "React",
    "Swift",
    "SwiftUI",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "FastAPI",
    "Flask",
    "Firebase",
    "AWS",
    "CI/CD",
    "LLMs",
    "NLP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kurugundlald2001@gmail.com",
    tel: "+14132759242",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/klakshmideepthi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lakshmi-deepthi-kurugundla/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kurugundla01",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kurugundlald2001@gmail.com,second.email@example.com?subject=Hello&body=Hi%20there",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "University of Massachusetts, Amherst",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Volunteer | CICS Training & Enrichment Program (CICStep)",
    //   logoUrl: "/umass.png",
    //   start: "January 2025",
    //   end: "Present",
    //   description:
    //     "Selected to participate in CICStep, an academic enrichment program focused on professional and technical development.Engaged in self-driven software and AI-related projects while attending faculty talks, alumni mentorship sessions, and research initiatives.Completed weekly reflective submissions to document skill development, research exploration, and personal progress in machine learning and software engineering.",
    // },
    {
      company: "Nuviso Networks",
      badges: [],
      href: "https://nuviso.com/",
      location: "Milpitas, CA",
      title: "Developer",
      logoUrl: "/nuviso.webp",
      start: "May 2024",
      end: "Present",
      description:
        "Developed and maintained React.js components and implemented SQL-based optimizations that enhance real-time asset-tracking dashboards, boosting operational efficiency by 25% and reducing downtime. Designed and optimized RESTful APIs that facilitate reliable data exchange with the front end, reducing data-related issues by 40% and enhancing product-management workflows through seamless integration with React components. Built an in-house retrieval-augmented-generation (RAG) chatbot in Python + LangChain that embeds ~25 k internal docs with OpenAI models, stores them in Pinecone, retrieves the most relevant passages per query, and uses GPT‑4o to reply in <1.5 s—boosting first‑contact resolution by 30 %. Shipped a React 18 + TypeScript chat panel connected to a FastAPI chatbot backend, giving users instant answers and reducing support ticket volume by 18%.",
    },
    {
      company: "Adobe",
      href: "https://www.adobe.com/",
      badges: [],
      location: "Remote",
      title: "Graduate Student Researcher",
      logoUrl: "/adobe.jpg",
      start: "January 2024",
      end: "May 2024",
      description:
        "Led a project on 'Confidential and efficient model inference on-device using' Trusted Execution Environments (TEEs), enhancing on-device security through advanced model obfuscation techniques. Analyzed and compared 5+ existing obfuscation methods by running time and space complexity evaluations, providing insights into their performance and suitability for different use cases. Led the development of a detailed benchmark report, based on a thorough theoretical analysis of AI security models, improving AI security practices and increasing model privacy."    
    },
    {
      company: "Groww",
      href: "https://splunk.com",
      badges: [],
      location: "Bangalore, India ",
      title: "Software Engineer",
      logoUrl: "/groww.avif",
      start: "December 2021",
      end: "June 2022",
      description: 
        "Gained practical experience in backend development, focusing on enhancing the platform's functionality and reliability. Trained in Spring Boot and ElasticSearch, contributing to API integrations, version control processes, and the development of new features to improve overall service capabilities. Identified and resolved software bugs, optimizing the platform's reliability and performance."    },
    {
      company: "4Climate",
      href: "https://www.4climate.in/",
      badges: [],
      location: "Ahmedabad, India",
      title: "Software intern - Frontend(ReactJs)",
      logoUrl: "/4climate.webp",
      start: "January 2018",
      end: "April 2018",
      description:
        "Developed responsive enterprise dashboards and internal software using ReactJS, while actively participating in agile processes to ensure seamless user experience and effective team collaboration."
    },
  ],
  education: [
    {
      school: "University of Massachusetts, Amherst",
      href: "https://www.umass.edu/",
      degree: "Master of Science (MS) in Computer Science",
      logoUrl: "/umass.png",
      start: "Feb 2023",
      end: "Dec 2024",
    },
    {
      school: "Indian Institute of Information and Technology, Sri city",
      href: "https://in.linkedin.com/school/indian-institute-of-information-technology-sricity/",
      degree: "Bachelor's of Technology(B.Tech) in Computer Science",
      logoUrl: "/iiits.png",
      start: "Aug 2018",
      end: "May 2022",
    },
  ],
  projects: [
    {
      title: "Neovie",
      href: "https://github.com/klakshmideepthi/neovie", // Replace with actual link if deployed
      dates: "Jan 2024 – Apr 2024",
      active: true,
      description:
        "Built an AI-powered healthcare assistant tailored for GLP-1–based weight management. It uses Claude 3.5 Sonnet via Firebase Cloud Functions to deliver context-aware, real-time health guidance based on medical history and vitals.",
      technologies: [
        "SwiftUI",
        "Claude 3.5 Sonnet",
        "Firebase",
        "Firestore",
        "Cloud Functions",
        "Swift Charts",
        "HealthKit",
        "Lottie",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/klakshmideepthi/neovie", // Replace with actual repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "ReflectOn",
      href: "https://github.com/klakshmideepthi/reflecton", // Replace with actual link if deployed
      dates: "Feb 2024 – Apr 2024",
      active: true,
      description:
        "Voice-based AI self-reflection app powered by GPT-4o and Whisper. Enables emotional insight generation, pattern recognition, and real-time conversation with multi-model AI architecture.",
      technologies: [
        "SwiftUI",
        "OpenAI GPT-4o",
        "Whisper API",
        "Firebase",
        "WebRTC",
        "Cloud Functions",
        "NLP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/klakshmideepthi/reflecton", // Replace with actual repo if public
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ]
} as const;
