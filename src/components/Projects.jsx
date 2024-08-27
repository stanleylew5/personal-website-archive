import Image from "next/image";
import hill3 from "../../public/images/hill3.svg";
import Title from "./Title.jsx";
import ProjectLeft from "./ProjectLeft.jsx";
import ProjectRight from "./ProjectRight.jsx";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <div className="bg-stanley-gray-400">
      <Image src={hill3} alt="hill3" className="w-full" />
      <div className="pb-[8vh]">
        <Title text={"Projects"} />
      </div>
      <div>
        {projects.map((project, index) => {
          const ProjectComponent = index % 2 === 0 ? ProjectLeft : ProjectRight;
          return (
            <ProjectComponent
              key={index}
              image={<Image src={project.image} alt={project.name} />}
              name={project.name}
              description={project.description}
              website={project.website}
              github={project.github}
              icons={project.icons.map((Icon, idx) => <Icon key={idx} size={24} />)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
