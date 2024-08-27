"use client";
import Image from "next/image";
import hill3 from "../../public/images/hill3.svg";
import Title from "./Title.jsx";
import ProjectLeft from "./ProjectLeft.jsx";
import ProjectRight from "./ProjectRight.jsx";
import { projects } from "../data/projects.js";
import useMediaQuery from "../hooks/useMediaQuery.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  const isMdOrLarger = useMediaQuery("(min-width: 768px)"); // md breakpoint is 768px

  return (
    <div className="bg-stanley-gray-400">
      <Image src={hill3} alt="hill3" className="w-full" />
      <div className="pb-[8vh]" id="projects">
        <Title text={"Projects"} />
      </div>
      <div>
        {projects.map((project, index) => {
          const ProjectComponent = isMdOrLarger
            ? index % 2 === 0
              ? ProjectLeft
              : ProjectRight
            : ProjectLeft;
          return (
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: (index % 5) * 0.2,
            }}
            key={index}>
              <ProjectComponent
                image={<Image src={project.image} alt={project.name} />}
                name={project.name}
                description={project.description}
                website={project.website}
                github={project.github}
                icons={project.icons.map((Icon, idx) => <Icon key={idx} size={24} />)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
