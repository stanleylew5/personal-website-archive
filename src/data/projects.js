import portfolio from "../../public/images/projects/portfolio.png";
import witl from "../../public/images/projects/witl.png";
import artfactory from "../../public/images/projects/artfactory.png";
import sdd from "../../public/images/projects/sdd.png";
import ewb from "../../public/images/projects/ewb.png";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projects = [
    {
        image: portfolio, 
        name: "Personal Portfolio",
        description: "A minimalist website displaying my skills, projects, and contact information", 
        icons: [SiReact, SiNextdotjs, SiTailwindcss, TbBrandFramerMotion, SiFigma],
        github: "https://github.com/stanleylew5/stanleylew5.github.io",
        website: "https://stanleylew5.github.io/",
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
