/**
 * Focus CV Data - Single Source of Truth (SSOT)
 * Based on Final CV improvements (Septian Sugiarta Saputra)
 */

export const cvFocusData = {
  personalInfo: {
    fullName: "Septian Sugiarta Saputra",
    phone: "081574364200",
    email: "septiansugiarta3@gmail.com",
    linkedin: "https://linkedin.com/in/septiansugiartasaputra",
    linkedinDisplay: "linkedin.com/in/septiansugiartasaputra",
    github: "https://github.com/septian-sugiarta",
    githubDisplay: "github.com/septian-sugiarta",
    portfolioUrl: "https://portfolio-website-septian-sugiarta.vercel.app",
    portfolioDisplay: "portfolio-website-septian-sugiarta.vercel.app",
    targetRoles: ["Junior Software Engineer", "Web Developer"],
  },
  summary: {
    en: "Information Systems graduate from UPN Veteran Jakarta (GPA: 3.83/4.00) and BNSP-Certified System Analyst with internship experience developing full-stack web applications. Skilled in React.js, Next.js, Express.js, and NestJS, with hands-on experience in building responsive user interfaces, designing RESTful APIs, and implementing relational databases. Experienced in working within cross-functional agile teams to translate business requirements into clean, scalable software. Actively seeking professional opportunities as a Junior Software Engineer or Web Developer to deliver robust and reliable web applications.",
  },
  skills: {
    programmingLanguages: ["JavaScript", "TypeScript", "Python"],
    frontend: [
      "React.js",
      "Next.js",
      "AngularJS",
      "TailwindCSS",
      "Shadcn/ui",
      "Responsive Web Design",
    ],
    backend: ["Node.js", "Express.js", "NestJS", "RESTful API Design"],
    databaseAndTools: [
      "MySQL",
      "PostgreSQL",
      "Prisma ORM",
      "Git",
      "Postman",
      "Figma",
    ],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Professional Working Proficiency" },
    ],
  },
  internshipExperience: [
    {
      company: "PT Garuda Maintenance Facility AeroAsia",
      role: "Full Stack Developer",
      location: "Tangerang, Indonesia",
      period: "Apr 2025 - Aug 2025",
      highlights: [
        "Engineered 35+ responsive frontend pages and components for the internal operational dashboard using AngularJS, ensuring cross-browser compatibility and seamless user experience.",
        "Designed a scalable relational database schema with 9 structured tables, developed 15+ RESTful API controllers, and 13 microservices using NestJS to streamline enterprise data flow.",
        "Collaborated with cross-functional stakeholders within an Agile environment to translate operational requirements into robust, full-stack reporting solutions used by internal teams.",
      ],
      techStack: ["AngularJS", "NestJS", "Microservices", "RESTful API", "Relational Database", "Agile"],
    },
    {
      company: "KSM Android UPNVJ",
      role: "Front-End Developer",
      location: "Jakarta, Indonesia",
      period: "Mar 2024 - Nov 2024",
      highlights: [
        "Developed 20+ reusable UI components and 5+ interactive core web pages using Next.js, TailwindCSS, and Shadcn/ui, ensuring consistent cross-device rendering.",
        "Implemented responsive web design and accessibility best practices across 4 device breakpoints (mobile, tablet, laptop, desktop), improving mobile usability and achieving a 90+ Lighthouse performance score.",
        "Partnered with backend developers and UI/UX designers in bi-weekly Agile sprints to successfully integrate 12+ REST API endpoints, ensuring seamless frontend-backend data communication.",
      ],
      techStack: ["Next.js", "TailwindCSS", "Shadcn/ui", "REST API", "Responsive Web Design", "Agile"],
    },
    {
      company: "PT Sinergi Informatika Semen Indonesia",
      role: "Python Programmer",
      location: "Jakarta, Indonesia",
      period: "May 2024 - Oct 2024",
      highlights: [
        "Engineered and optimized 4 core backend modules for the enterprise Learning Management System (LMS) using Python, ensuring stable functionality for internal workflows.",
        "Analyzed system architecture and data flow to debug issues, successfully resolving 20+ technical tickets and refining backend data processing.",
        "Managed codebase integration using Git version control and participated in daily Agile stand-ups with cross-functional teams to deliver feature enhancements on schedule.",
      ],
      techStack: ["Python", "Enterprise LMS", "Git", "Bug Fixing", "Agile"],
    },
  ],
  projectExperience: [
    {
      title: "Knowledge Management System for Scabies Management in Pesantren",
      role: "Full Stack Developer",
      type: "Final Project",
      period: "Nov 2025 - Sep 2026",
      highlights: [
        "Engineered a comprehensive full-stack Knowledge Management System (KMS) using React.js and Express.js, delivering 140+ responsive web pages and 7 core features tailored for 7 distinct user roles.",
        "Architected a scalable relational database schema comprising 45+ tables, and developed a robust backend infrastructure with 90+ API routes and 75+ controllers for secure data processing.",
        "Directed the end-to-end development lifecycle within an Agile/Scrum framework, authoring and executing 120+ comprehensive blackbox test cases across all access levels to guarantee high system reliability.",
      ],
      techStack: ["React.js", "Express.js", "Node.js", "Relational Database", "RESTful API", "Blackbox Testing", "Agile/Scrum"],
    },
    {
      title: "S-Mart",
      role: "UI/UX & Frontend Prototyper",
      location: "Jakarta, Indonesia",
      period: "Jan 2026 - May 2026",
      highlights: [
        "Engineered a structured Design System comprising 30+ reusable UI components (modals, forms, navigation) for an RFID-based supermarket app, accelerating the frontend development pipeline.",
        "Mapped end-to-end application logic and user flows for item scanning, cart management, and checkout, ensuring intuitive navigation and seamless state transitions.",
        "Delivered high-fidelity interactive prototypes and standardized CSS variables (typography, spacing, color palettes) to optimize developer handoff and ensure pixel-perfect integration.",
      ],
      techStack: ["Design System", "Figma", "UI/UX Prototyping", "User Flows", "Frontend Prototyping"],
    },
  ],
  education: {
    institution: "Universitas Pembangunan Nasional \"Veteran\" Jakarta",
    degree: "Bachelor of Computer Science in Information Systems",
    period: "Sep 2022 - Sep 2026",
    gpa: "3.83 / 4.00",
  },
  certifications: [
    {
      name: "System Analyst",
      issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
      date: "February 2026",
    },
  ],
};
