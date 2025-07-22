import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tlhalefang Ntshilane",
  initials: "TN",
  url: "https://studybuddiai.vercel.app",
  location: "Gaborone, Botswana",
  locationLink: "https://www.google.com/maps/place/gaborone",
  description:
    "Tech Innovator, Developer & Cybersecurity Student. I build solutions at the intersection of AI, cybersecurity, and education.",
  summary:
    "I am a passionate and innovative tech developer, currently studying Network Security and Computer Forensics at Botho University, Botswana. I specialize in building solutions at the intersection of AI, cybersecurity, and education. From creating award-winning platforms to participating in international programs, I bring a blend of coding, UX thinking, and project leadership. I founded [BotsEdu Hacks](https://botseduhacks.tiiny.site), created [StudyBuddy AI](https://studybuddiai.vercel.app), and represented Botswana in Turkey via Student Exchange Program.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "PHP",
    "JavaScript",
    "HTML/CSS",
    "MySQL",
    "Flutter",
    "React",
    "Laravel",
    "MATLAB",
    "Kali Linux",
    "Maltego",
    "Wireshark",
    "Burp Suite",
    "Firebase",
    "Supabase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "thalefang@example.com",
    tel: "+267123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ThalefangN",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/thalefang-ntshilane",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/thalefang",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@thalefang",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BotsEdu Hacks",
      href: "https://botseduhacks.tiiny.site",
      badges: ["Founder"],
      location: "Botswana",
      title: "Founder & CEO",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "Present",
      description:
        "Innovation and hackathon platform empowering primary, secondary, and tertiary students. Offers B2B training and custom hackathon challenges for schools and organizations. Built community-driven platform for tech education and innovation.",
    },
    {
      company: "StudyBuddy AI",
      badges: ["Creator"],
      href: "https://studybuddiai.vercel.app",
      location: "Remote",
      title: "Creator & Lead Developer",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "A smart eLearning platform powered by AI featuring AI Resume Builder, Hackathon Rooms, Startup Planner, and Feature Roadmap. Built using modern web technologies with focus on user experience and AI integration.",
    },
    {
      company: "BotsEdu Learn",
      href: "https://botsedulearn.42web.io",
      badges: ["Developer"],
      location: "Botswana",
      title: "Full Stack Developer",
      logoUrl: "/shopify.svg",
      start: "2022",
      end: "Present",
      description:
        "An online education system to connect students and teachers via videos, assignments, and chat. Developed comprehensive learning management system with real-time communication features.",
    },
    {
      company: "Dev Gen Code Pioneers Network",
      href: "#",
      badges: ["Founder"],
      location: "Botswana",
      title: "Founder & Community Lead",
      logoUrl: "/nvidia.png",
      start: "2022",
      end: "Present",
      description:
        "Community for young developers to collaborate on apps, compete in hackathons, and launch startups. Organized tech workshops, seminars, and mentorship programs for emerging developers.",
    },
  ],
  education: [
    {
      school: "Botho University",
      href: "https://bothouniversity.ac.bw",
      degree: "Network Security and Computer Forensics",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "Student Exchange Program",
      href: "#",
      degree: "Mathematics of Machine Learning & Software Design",
      logoUrl: "/laurier.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "EC-Council",
      href: "https://eccouncil.org",
      degree: "Certified Cybersecurity Fundamentals",
      logoUrl: "/ib.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "Cisco",
      href: "https://cisco.com",
      degree: "Certified Networking & Cybersecurity",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "StudyBuddy AI",
      href: "https://studybuddiai.vercel.app",
      dates: "2023 - Present",
      active: true,
      description:
        "A smart eLearning platform powered by AI featuring AI Resume Builder, Hackathon Rooms, Startup Planner, and Feature Roadmap. Built with modern web technologies and AI integration.",
      technologies: [
        "React",
        "JavaScript",
        "AI/ML",
        "Firebase",
        "Vercel",
        "HTML/CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://studybuddiai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BotsEdu Hacks",
      href: "https://botseduhacks.tiiny.site",
      dates: "2023 - Present",
      active: true,
      description:
        "Innovation and hackathon platform empowering students across all education levels. Provides B2B training and custom hackathon challenges for educational institutions.",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://botseduhacks.tiiny.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BotsEdu Learn",
      href: "https://botsedulearn.42web.io",
      dates: "2022 - Present",
      active: true,
      description:
        "Online education system connecting students and teachers through videos, assignments, and real-time chat functionality.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML/CSS",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://botsedulearn.42web.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tswana Student Loan Portal",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Multi-company student loan management system with secure file uploads and comprehensive loan tracking capabilities.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "File Upload",
        "Security",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Crowdsourced Safety App",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Real-time issue reporting mobile application built with Flutter, featuring geolocation services and community-driven safety reporting.",
      technologies: [
        "Flutter",
        "Dart",
        "Geolocation",
        "Firebase",
        "Real-time DB",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Lost Device Tracker",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Web-based device tracking system that can locate phones via Wi-Fi even after factory reset, using advanced networking techniques.",
      technologies: [
        "JavaScript",
        "Wi-Fi APIs",
        "Networking",
        "HTML/CSS",
        "PHP",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Botho Hacks - 1st Place Winner",
      dates: "2023",
      location: "Botho University, Botswana",
      description:
        "Won first place at Botho University's premier hackathon competition with an innovative tech solution. Competed against teams from across the university.",
      image: "/hack-western.png",
      links: [],
    },
    {
      title: "Student Exchange Program - Turkey",
      dates: "2023",
      location: "Turkey",
      description:
        "Participated in international tech exchange program focused on Mathematics of Machine Learning using MATLAB, Software Design Patterns, UX Design Principles, and Agile Project Management.",
      image: "/hack-the-north.png",
      links: [],
    },
    {
      title: "Community Tech Workshop Facilitator",
      dates: "2022 - Present",
      location: "Botswana",
      description:
        "Regular facilitator in community tech workshops and seminars, teaching programming, cybersecurity basics, and tech entrepreneurship to local students and professionals.",
      image: "/firstnet.png",
      links: [],
    },
    {
      title: "Dev Gen Code Pioneers Hackathons",
      dates: "2022 - Present",
      location: "Botswana",
      description:
        "Organized and participated in multiple hackathons through Dev Gen Code Pioneers Network, fostering collaboration among young developers and promoting startup culture.",
      image: "/developer-week.jpg",
      links: [],
    },
  ],
} as const;