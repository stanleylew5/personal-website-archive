import portfolio from "../../public/images/projects/portfolio.png";
import witl from "../../public/images/projects/witl.png";
import artfactory from "../../public/images/projects/artfactory.png";
import sdd from "../../public/images/projects/sdd.png";
import ewb from "../../public/images/projects/ewb.png";
import dashboard from"../../public/images/projects/dashboard.png";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiFirebase, SiPrettier } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projects = [
    {
        image: dashboard, 
        name: "Productivity Dashboard",
        description: "Developed a full-stack productivity dashboard that integrates Google Calendar, Weather, and Time Zone Data, offering a centralized hub for daily tools.", 
        icons: [SiReact, SiNextdotjs, SiTailwindcss, SiFigma, SiFirebase, SiPrettier],
        github: "https://github.com/stanleylew5/productivity-dashboard",
        website: "https://github.com/stanleylew5/productivity-dashboard"
    },
    {
        image: witl,
        name: "Womxn In The Law",
        description: "Led a team of ten student developers to develop a website for UCR's Womxn In the Law organization",
        icons: [SiReact, SiNextdotjs, SiTailwindcss],
        github: "https://github.com/acm-ucr/witl-website",
        website: "https://witl.ucrhighlanders.org",
    },
    {
        image: artfactory,
        name: "Art Factory",
        description: "The official website for Art Factory, an organization aimed towards cultivating creativity, at The University of California, Riverside",
        icons: [SiReact, SiNextdotjs, SiTailwindcss],
        github: "https://github.com/acm-ucr/art-factory-website",
        website: "https://artfactory.ucrhighlanders.org/",
    },
    {
        image: sdd,
        name: "Senior Design Display",
        description: "An UCR-affiliated site showcasing Senior Design projects, a platform to display students' solutions to real-world challenges",
        icons: [SiReact, SiNextdotjs, SiTailwindcss],
        github: "https://github.com/acm-ucr/senior-design-website",
        website: "https://seniors.cs.ucr.edu/",
    },
    {
        image: ewb,
        name: "Engineers Without Borders",
        description: "The official Engineers Without Borders website, a nonprofit organization dedicated to supporting worldwide community-driven development programs.",
        icons: [SiReact, SiNextdotjs, SiTailwindcss],
        github: "https://github.com/acm-ucr/ewb-website",
        website: "https://ewb.ucrhighlanders.org/",
    },
];
