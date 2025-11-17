import slugify from "slugify";

export const CREATOR_INFO = {
  name: "Arsh Bansal",
  title: "Software Engineering Student & Developer",
  email: "arshb6564@gmail.com",
  phone: "0410999585",
  location: "Melbourne, Australia",
  linkedin: "https://www.linkedin.com/in/arshbansal05",
  github: "https://github.com/arsh-bansal",
  githubRepo: "https://github.com/arsh-bansal/arsh-bansal",
  bio: "Motivated software engineering student passionate about building web applications and creating solutions that connect people. Currently pursuing Bachelor of Engineering (Honours) - Software Engineering at Monash University.",
  avatar: "/ArshBansal.jpeg",
  ogImage: "/og-image.png",
};

export const SITE_CONFIG = {
  url: "https://arshbansal.dev",
  name: "Arsh Bansal Portfolio",
};

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (Honours) - Software Engineering",
    institution: "Monash University",
    location: "Melbourne, Australia",
    period: "Expected Dec 2026",
    status: "Current Student",
  },
  {
    degree: "Diploma - Bachelor of Information Technology",
    institution: "Amity University",
    location: "India",
    period: "2022 - 2024",
    status: "Completed",
  },
];

export const SKILLS = {
  technical: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Swift",
    "SQL",
    "HTML5",
    "CSS3",
    "NestJS",
    "Node.js",
    "Express.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Firebase Firestore",
    "Prisma ORM",
    "React",
    "SwiftUI",
    "Tailwind CSS",
    "Next.js",
    "Firebase Auth",
    "Firebase Cloud Storage",
    "Google Cloud Platform",
    "Docker",
    "Git",
    "GitHub",
    "GitHub Actions",
    "REST APIs",
    "WebSockets",
    "JWT",
    "Tkinter",
    "Core Data",
  ],
  soft: [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Time Management",
    "Customer Service",
    "Fast-paced Environment",
    "Agile/Scrum",
  ],
};

export const WORK_EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Jabsz Studios",
    location: "Remote",
    period: "August 2025 - Present",
    description:
      "Developing and maintaining scalable web applications as part of a distributed development team. Implementing backend logic, APIs, and integrations using Nest.js, TypeScript, and modern tooling. Collaborating with designers and frontend developers to deliver polished user experiences.",
  },
  {
    role: "Team Member / Cashier",
    company: "7-Eleven Australia",
    location: "Australia",
    period: "May 2025 - Present",
    description:
      "Delivered friendly customer service and handled transactions via POS and fuel console systems. Managed store presentation, stock rotation, and ensured a clean and safe environment. Executed closing/opening procedures, balanced tills, and prepared handover documentation.",
  },
  {
    role: "Full Stack Intern (FLISS Program)",
    company: "Full Stack Development Bootcamp Australia",
    location: "Australia",
    period: "July 2024 - October 2024",
    description:
      "Contributed to end-to-end full-stack web development projects in an agile team setting. Built scalable features with strong UI/UX considerations and clean, maintainable code. Collaborated in sprints, participated in code reviews, and delivered high-quality features. Received a Letter of Recognition for outstanding technical performance.",
  },
];

export const PROJECTS = [
  {
    name: "Skilltree",
    slug: slugify("Skilltree", { lower: true }),
    image: "/projects/skilltree.png",
    description:
      "Backend developer for a social platform enabling users to create skill-based communities. Implemented systems for progression trees, XP calculation, verification workflows, and ranking.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "React"],
    link: "",
    github: "",
    features: [
      "Social platform for skill-based communities",
      "Progression trees and XP calculation system",
      "Verification workflows for skill validation",
      "Ranking and leaderboard systems",
      "REST APIs for community creation, tagging, submissions, and leaderboards",
      "Type-safe development with TypeScript",
      "Scalable backend architecture with NestJS",
    ],
    technicalHighlights: [
      {
        title: "Backend Architecture",
        description:
          "Built with NestJS and TypeScript, providing a scalable and maintainable backend architecture. Implemented REST APIs for community management, user progression, and ranking systems.",
      },
      {
        title: "Database Design",
        description:
          "Leveraged PostgreSQL for robust data storage and relationships. Designed efficient schemas for communities, users, skills, and progression tracking.",
      },
      {
        title: "Progression System",
        description:
          "Implemented complex progression trees and XP calculation algorithms to track user skill development and community engagement.",
      },
      {
        title: "Verification & Ranking",
        description:
          "Built verification workflows to validate user skills and implemented ranking systems to showcase top performers in each community.",
      },
    ],
  },
  {
    name: "Santorini Board Game",
    slug: slugify("Santorini Board Game", { lower: true }),
    image: "/projects/santorini.png",
    description:
      "Developed a full digital implementation of the Santorini strategy board game with GUI. Implemented unique god powers (Artemis, Demeter, Zeus), rule enforcement, and win logic.",
    technologies: ["Python", "Tkinter"],
    link: "",
    github: "",
    features: [
      "Full digital implementation of Santorini board game",
      "Interactive GUI built with Tkinter",
      "Unique god powers (Artemis, Demeter, Zeus)",
      "Complete rule enforcement and win logic",
      "Object-oriented architecture",
      "Timer functionality and hints system",
      "Modular design supporting expansions",
    ],
    technicalHighlights: [
      {
        title: "Game Logic",
        description:
          "Implemented complete game mechanics including move validation, win conditions, and turn management. Built robust rule enforcement to ensure fair gameplay.",
      },
      {
        title: "God Powers System",
        description:
          "Designed and implemented unique god powers (Artemis, Demeter, Zeus) with special abilities that modify gameplay, requiring careful game state management.",
      },
      {
        title: "GUI Development",
        description:
          "Created an intuitive graphical interface using Tkinter, providing smooth user interaction and visual feedback for all game actions.",
      },
      {
        title: "Architecture",
        description:
          "Built with object-oriented principles, supporting modular expansions and features like timers and hints. The architecture is maintainable and extensible.",
      },
    ],
  },
  {
    name: "UNEXP",
    slug: slugify("UNEXP", { lower: true }),
    image: "/projects/unexp.png",
    description:
      "Developed an iOS app for Monash students to browse and explore university units. Integrated Firebase for authentication, cloud sync, and real-time bookmarking across devices.",
    technologies: ["SwiftUI", "Firebase", "Core Data"],
    link: "",
    github: "",
    features: [
      "iOS app for Monash University students",
      "Browse and explore university units",
      "Firebase authentication and cloud sync",
      "Real-time bookmarking across devices",
      "Clean SwiftUI interfaces",
      "Smooth navigation and responsive layouts",
      "Offline support with Core Data",
    ],
    technicalHighlights: [
      {
        title: "iOS Development",
        description:
          "Built with SwiftUI, providing a modern and native iOS experience. Implemented clean interfaces with smooth navigation and responsive layouts.",
      },
      {
        title: "Firebase Integration",
        description:
          "Integrated Firebase for authentication, cloud storage, and real-time synchronization. Enabled seamless bookmarking across multiple devices.",
      },
      {
        title: "Data Management",
        description:
          "Leveraged Core Data for local storage and offline support, ensuring the app remains functional even without network connectivity.",
      },
      {
        title: "User Experience",
        description:
          "Designed intuitive user flows for browsing and exploring university units, making it easy for students to find and save relevant information.",
      },
    ],
  },
];

export const metadata = {
  metadataBase: new URL("https://arshbansal.dev"),
  title: "About",
  description:
    "Learn about Arsh Bansal, a software engineering student and developer. Full-stack developer specializing in NestJS, TypeScript, React, and modern web technologies.",
  keywords: [
    "Arsh Bansal",
    "developer",
    "full-stack developer",
    "software engineering student",
    "NestJS developer",
    "React developer",
    "portfolio",
  ],
  openGraph: {
    title: "About Arsh Bansal | Portfolio",
    description:
      "Learn about Arsh Bansal, a software engineering student and developer specializing in modern web technologies.",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Arsh Bansal | Portfolio",
      },
    ],
  },
};
