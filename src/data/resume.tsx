import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lakshmi Deepthi K",
  initials: "LK",
  url: "https://laks.io",
  description:
    "Actively looking for opportunities in AI/ML and Generative AI.",
  summary:
    "I’m a developer, researcher, and builder who’s endlessly curious about how AI can understand, help, and adapt to people. I started my journey in computer science because I loved solving problems—and over time, I found myself drawn to building products where machine learning meets real human needs.\n\n" +
    "Since then, I’ve worked across startups, research labs, and industry teams—developing apps like Neovie (an AI health coach), ReflectOn (a voice-based reflection app), and a smart troubleshooting chatbot at Nuviso. Whether I’m designing secure model inference systems at Adobe or crafting GenAI pipelines with LangChain, what drives me is the same: creating thoughtful, intelligent systems that feel personal and useful.\n\n" +
    "Right now, I’m excited about opportunities in Generative AI, ML engineering, or AI product roles where I can keep learning, building, and creating things that matter.\n\n",
  avatarUrl: "/me.jpg",
  skills: [
    // Programming Languages
    "Python",
    "Java", 
    "C",
    "R",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3", 
    "Swift",

    // Databases
    "PostgreSQL",
    "MySQL",
    "DynamoDB",
    "Snowflake Data Cloud",
    "MongoDB",
    "Firestore",
    
    // Cloud & DevOps Tools
    "Docker",
    "Kubernetes",
    "Prisma",
    "Postman",
    "AWS Lambda",
    "AWS EC2", 
    "AWS S3",
    "AWS RDS",
    "AWS DynamoDB",
    "AWS IAM",
    "AWS CloudFormation",
    "AWS SageMaker",
    "AWS Bedrock",
    "Git",
    "RESTful APIs",
    "CI/CD",
    "MLOps",

    // AI/ML Libraries & Frameworks 
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "FastAPI",
    "Flask",
    "React",
    
    // NLP & GenAI
    "Prompt Engineering",
    "Text Generation",
    "Tokenization", 
    "Attention Mechanisms",
    "Embedding Models",
    "RAG",
    "LLM Fine-tuning",
    "Multi-turn Conversational Design",
    "Vector Databases",
    "Pinecone",
    "LangChain"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "deepthikl.136@gmail.com",
    tel: "+16822567888",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/klakshmideepthi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kldeepthi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/kurugundla01",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:deepthikl.136@gmail.com,second.email@example.com?subject=Hello&body=Hi%20there",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
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
        "Spearheaded development and optimization efforts for asset-tracking solutions, focusing on React 18 and TypeScript dashboards with PostgreSQL backend enhancements that significantly cut load times. Designed and improved REST & gRPC APIs using FastAPI and Spring Boot, enhancing data synchronization and streamlining product workflows. A key achievement was engineering and deploying an internal RAG chatbot leveraging LangChain, Pinecone, and Amazon Bedrock for rapid document processing and improved issue resolution. This initiative included shipping a real-time React chat interface connected via WebSockets, which reduced support tickets and provided field engineers with instant knowledge access. Additionally, implemented data pipeline and KPI monitoring in Snowflake to track AI model performance and coverage.",
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
      href: "https://groww.in/",
      badges: [],
      location: "Bangalore, India ",
      title: "Software Engineer",
      logoUrl: "/groww.avif",
      start: "Aug 2021",
      end: "Dec 2022",
      description: 
        "Collaborated on designing and delivering Promo Service, a key Java 11 / Spring Boot microservice for managing promo codes across web and mobile applications. This involved exposing RESTful endpoints documented with Swagger, ensuring contract stability with JUnit tests, and significantly improving redemption latency through PostgreSQL query tuning and Redis caching. Maintained high data consistency across services by publishing Kafka events and implementing SAGA-style rollback handlers. Streamlined deployment by containerizing the service with Docker and leveraging GitLab CI with Helm for deployments to Google Kubernetes Engine, substantially reducing rollout times."
    },
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
        "Assisted in developing and refining the company’s internal website using ReactJS, focusing on responsive UI components and layout improvements under team guidance. Supported integration of frontend components with backend APIs, and contributed to testing, version control (Git), and deployment workflows using CI/CD tools."
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
  volunteering: [
    {
      organization: "Empathable",
      href: "https://empathable.com/", // You may want to update this URL
      badges: [],
      location: "Remote",
      title: "AI Software Developer",
      start: "February 2025",
      end: "Present",
      description:
        "Built a HIPAA-compliant, voice-driven patient simulator: a React 18 + TypeScript front end streams WebRTC audio to a Python/FastAPI backend that blends Whisper ASR, GPT-4o dialogue, and neural TTS, letting clinicians rehearse doctor-patient conversations in real time. Implemented an NLP scoring engine that rates each exchange on empathy, clarity, and diagnostic accuracy and returns tailored coaching; a 15-resident pilot lifted simulated patient-satisfaction scores 25%. Integrated FHIR‑based APIs, single‑sign‑on, and multilingual/accessibility features, cutting standardized actor training costs ~40% and surfacing department‑level dashboards tied to HCAHPS patient-experience metrics."
    }
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
