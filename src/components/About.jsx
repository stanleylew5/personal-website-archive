"use client";
import hill from "../../public/images/hill.svg";
import gear2 from "../../public/images/gear2.svg";
import gear3 from "../../public/images/gear3.svg";
import gear4 from "../../public/images/gear4.svg";
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
    return(
      <div className="bg-stanley-gray-300 h-fit md:h-screen">
        <Image src={gear2} alt="gear2" className="absolute animate-spin top-[29vh] md:top-[47vh] left-[16vw] w-[7vw]"/>
        <Image src={gear3} alt="gear3" className="absolute animate-spin top-[26vh] md:top-[38vh] left-[5vw] w-[10vw]"/>
        <Image src={gear4} alt="gear4" className="absolute animate-spin top-[20vh] md:top-[16vh] left-[15vw] w-[16vw]"/>
        <motion.p
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.5 }}
         className="pt-[10vh] md:pt-[20vh] pb-[2vh] md:pb-[8vh] text-3xl md:text-7xl pr-8 md:pr-16 font-bold  bg-clip-text text-right bg-gradient-to-r from-stanley-gray-100 to-stanley-purple-400 animate-gradient bg-300% text-transparent"
        >
          Hello, I'm Stanley Lew
        </motion.p>
        <p className="w-2/3 md:w-1/3 ml-auto text-right text-[3.5vw] md:text-2xl text-stanley-gray-100 pr-4 md:pr-16 font-semibold">
          I am a second-year studying computer science at The University of California, Riverside.
        </p>

        <motion.p
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.5 }}
         className="absolute bottom-[55%] md:bottom-[10%] right-[0vw] md:right-[20vw] z-50 text-[8vw] md:text-[6vw] pr-16 font-bold text-stanley-gray-100"
        >
          Software Engineer
        </motion.p>
        <div className="static mt-[10vh] md:mt-0 md:absolute bottom-0">
          <Image src={hill} alt={"hill"} className="w-screen"/>
        </div>
      </div>
    );  
  };
  export default About;