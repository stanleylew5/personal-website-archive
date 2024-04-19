"use client";
import hill from "../../public/images/hill.svg"
import Image from "next/image";
import { motion } from "framer-motion";
const About = () => {
    return(
      <div className="h-screen bg-gradient-to-b from-stanley-black-100 to-stanley-black-200">
        <motion.p
         initial={{ opacity: 0, y: -15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
        className="text-transparent pt-24 pb-12 md:pt-32 text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-stanley-gray-200 to-stanley-gray-300 animate-gradient bg-300% px-4"
      >
        Hello, I'm Stanley Lew
      </motion.p>
        <p className="text-center text-xl text-stanley-gray-500 px-8 font-bold">
          Welcome to my humble abode.
        </p>
        <p className="text-center text-xl text-stanley-gray-500 px-8  font-bold">
          I am currently a first-year studying computer science at The University of California, Riverside. 
        </p>
        <p className="text-center text-xl text-stanley-gray-500 px-8  font-bold">
          I am seeking software engineering and full stack engineering opportunities.
        </p>
        <p className="text-center text-xl text-stanley-gray-500 px-8 font-bold">
          In my spare time, I enjoy taking scenic photographs. Feel free to check out my gallery below!
        </p>
        <p className="relative z-10 text-transparent pt-10 md:pb-12 md:pt-40 text-4xl md:text-7xl font-bold text-center bg-clip-text bg-gradient-to-r from-stanley-gray-200 to-stanley-gray-300 animate-gradient bg-300%">
          Software Engineer
        </p>
        <div className="absolute md:bottom-0 left-0 w-full md:translate-y-12">
          <Image src={hill} alt={"hill"} className="w-full"/>
        </div>
      </div>
    );  
  };
  export default About;