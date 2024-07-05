"use client";
import hill from "../../public/images/hill.svg";
import gear2 from "../../public/images/gear2.svg";
import gear3 from "../../public/images/gear3.svg";
import gear4 from "../../public/images/gear4.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
    return(
      <div className=" bg-stanley-gray-300">
        <Image src={gear2} alt="gear2" className="absolute animate-spin top-[47%] left-[14%]"/>
        <Image src={gear3} alt="gear3" className="absolute animate-spin top-[38%] left-[3%]"/>
        <Image src={gear4} alt="gear4" className="absolute animate-spin top-[16%] left-[13%]"/>
        <motion.p
         initial={{ opacity: 0, y: -15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
        className="pt-24 pb-12 md:pt-44 text-4xl md:text-7xl pr-16 font-bold text-right bg-clip-text bg-gradient-to-r from-stanley-gray-100 to-stanley-purple-400 animate-gradient bg-200% text-transparent"
      >
        Hello, I'm Stanley Lew
      </motion.p>
        <p className="text-right text-2xl text-stanley-gray-100 pr-16 font-semibold">
        I am a second-year studying computer <br/>science at The University of California, Riverside.
        </p>
        <motion.p
         initial={{ opacity: 0, y: -15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
        className="absolute bottom-[10%] right-[24%] z-50 pt-24 pb-12 md:pt-44 text-4xl md:text-7xl pr-16 font-bold bg-clip-text bg-gradient-to-r from-stanley-gray-100 to-stanley-purple-400 animate-gradient bg-200% text-transparent"
      >
        Software Engineer
      </motion.p>
        <div className=" md:bottom-0 left-0 w-full md:translate-y-16">
          <Image src={hill} alt={"hill"} className="w-full"/>
        </div>
      </div>
    );  
  };
  export default About;