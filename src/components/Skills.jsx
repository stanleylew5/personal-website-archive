"use client";
import Image from "next/image";
import Title from "./Title.jsx";
import hill2 from "../../public/images/hill2.svg";
import { frameworks } from "../data/frameworks.js";
import { languages } from "../data/languages.js";
import { others } from "../data/others.js";
import { motion } from "framer-motion";

const Skills = () => {
  return(
    <div className="bg-stanley-gray-400">
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      >
        <Image src={hill2} alt="alt2" className="w-screen -translate-y-[2vh] md:-translate-y-[7vh]"/>
        </motion.div>
      <div className="flex justify-center translate-y-[-3vh] md:translate-y-[-10vh]" id="skills">
        <Title text={"Skills"}/>
      </div>
      <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.1,
      }}
      className="grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto pt-[1vh]">
        <div className="flex flex-col items-center">
          <p className="text-stanley-white-100 text-center underline text-3xl md:text-5xl pb-2">Languages</p>
          <div className="justify-center">
            {languages.map((language, index) => (
              <div key={index} className="flex mb-2">
              <div className="text-stanley-purple-100 text-3xl">{language.icon}</div>
              <div className="pl-4 font-bold text-stanley-white-100 text-2xl">{language.name}</div>
            </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 md:pt-0">
          <p className="text-stanley-white-100 text-center underline text-3xl md:text-5xl pb-2">Frameworks</p>
          <div className="justify-center">
            {frameworks.map((framework, index) => (
              <div key={index} className="flex mb-2">
                <div className="text-stanley-purple-100 text-3xl">{framework.icon}</div>
                <div className="pl-4 font-bold text-stanley-white-100 text-2xl">{framework.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 md:pt-0">
          <p className="text-stanley-white-100 text-center underline text-3xl md:text-5xl pb-2">Additional</p>
          <div className="justify-center">
            {others.map((other, index) => (
              <div key={index} className="flex mb-2">
                <div className="text-stanley-purple-100 text-3xl">{other.icon}</div>
                <div className="pl-4 font-bold text-stanley-white-100 text-2xl">{other.name}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );  
};
export default Skills;