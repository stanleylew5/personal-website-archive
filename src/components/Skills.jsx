
import Image from "next/image";
import Title from "./Title.jsx";
import hill2 from "../../public/images/hill2.svg";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const Skills = () => {
  return(
    <div className="bg-stanley-gray-400">
      <Image src={hill2} alt="alt2"/>
      <div className="absolute justify-center bottom-[-40%] left-[40%]">
        <Title text={"Skills"} id="skills"/>
      </div>
      <div className="grid grid-cols-3 w-3/4 mx-auto pt-16">
        <div className="flex flex-col">
          <p className="text-stanley-white-100 text-center font-bold text-5xl pb-4">Languages</p>
          <div className="flex flex-col ml-16">
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiCplusplus />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">C++</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiPython />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Python</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiHtml5 />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">HTML5</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiCss3 />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">CSS3</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiJavascript />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Javascript</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-stanley-white-100 text-center font-bold text-5xl pb-4">Frameworks</p>
          <div className="flex flex-col ml-10">
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiReact />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">React.js</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiNextdotjs />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Next.js</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiTailwindcss />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">TailwindCSS</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <TbBrandFramerMotion />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Framer Motion</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-stanley-white-100 text-center font-bold text-5xl pb-4">Other</p>
          <div className="flex flex-col ml-28">
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiGit />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Git</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiGithub />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Github</p>
            </div>
            <div className="inline-flex">
              <div className="text-stanley-purple-100 text-3xl">
                <SiFigma />
              </div>
              <p className="pl-4 font-bold text-stanley-white-100 text-2xl">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};
export default Skills;