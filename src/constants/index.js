import {
  frontend,
  backend,
  ux,
  prototyping,
  mobileIcon,
  cloudIcon,
  // devopsIcon,
  apiIcon,
  databaseIcon,
  consultingIcon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
  {
    title: "Mobile App Development",
    icon: mobileIcon,
  },
  {
    title: "Cloud Solutions",
    icon: cloudIcon,
  },
  // {
  //   title: "DevOps Engineering",
  //   icon: devopsIcon,
  // },
  {
    title: "API Development",
    icon: apiIcon,
  },
  {
    title: "Database Design",
    icon: databaseIcon,
  },
  {
    title: "Technical Consulting",
    icon: consultingIcon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Teacher",
    company_name: "Al-Qalam School",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2020 - Present",
  },
  // {
  //   title: "Mentor (Volunteer)",
  //   company_name: "Microverse",
  //   icon: microverse,
  //   iconBg: "#333333",
  //   date: "Mar 2022 - May 2022",
  // },
  // {
  //   title: "Junior Software Engineer",
  //   company_name: "Kelhel",
  //   icon: kelhel,
  //   iconBg: "#333333",
  //   date: "May 2022 - Oct 2022",
  // },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Diversity Cyber Council",
  //   icon: dcc,
  //   iconBg: "#333333",
  //   date: "Sep 2022 - Present",
  // },
];

const projects = [
  {
    id: "project-1",
    name: "Amazon Clone",
    description:
      "An e-commerce web application replicating key features of Amazon, including user authentication, product browsing, and a shopping cart. It leverages Firebase for backend services and real-time data synchronization, providing a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/Abuabdellahh/Amazon-clone-final",
    demo: "https://amazon-clone-final.netlify.app/",
  },
  {
    id: "project-2",
    name: "Evangadi Forum",
    description: `
A community-driven platform designed to facilitate discussions and knowledge sharing among users. The forum allows members to post questions, provide answers, and engage in meaningful conversations on various topics. `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/Abuabdellahh/Frontend",
    demo: "https://evangadiforum-project.netlify.app/",
  },
  {
    id: "project-3",
    name: "Netflix Clone",
    description: `
A video streaming platform mimicking the core functionalities of Netflix. It allows users to browse and view movies and TV shows, featuring a modern UI with dynamic content fetching, designed to deliver a smooth and engaging viewing experience.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/Abuabdellahh/Netflix-clone-2024/",
    demo: " https://abuabdellahh.github.io/Netflix-clone-2024/",
  },
  {
    id: "project-4",
    name: "Personal Portfolio",
    description: `
A professional and modern portfolio website showcasing skills, projects, and experience. Built with responsive design in mind, it features an interactive UI/UX that highlights expertise in full-stack development. `,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/Abuabdellahh/prtfolio",
    demo: "https://eibrahim-protfolio.netlify.app/",
  },
  {
    id: "project-5",
    name: "Apple Clone",
    description:
      "A front-end project that recreates the sleek and minimalistic design of Apple's official website. It showcases products with high-quality visuals and responsive layouts, offering a polished user interface that mirrors Apple's iconic style.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/Abuabdellahh/Apple-clone--API",
    demo: "https://apple-clone-2024.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
