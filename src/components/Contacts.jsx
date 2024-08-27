"use client";
import Title from "../components/Title.jsx";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link.js";
import { motion } from "framer-motion";
const Contacts = () => {
    return(
      <div className="bg-gradient-to-b from-stanley-gray-400 to-stanley-purple-400">
        <div className="relative">
          <div className="pt-[10vh] pb-[10vh] md:pb-[13vh]" id="contacts">
            <Title text={"Contacts"} />
          </div>
        </div>
        <div className="flex justify-center pt-[] md:pt-[2vh] pb-[8vh] md:pb-[10vh]">
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
          className="grid grid-cols-4 md:pb-[5vh] w-11/12">
            <Link href="https://www.instagram.com/stanleylew5/" className="text-[11vw] md:text-[7vw] flex justify-center text-stanley-white-100 hover:scale-105 hover:text-stanley-gray-200" target="_blank" rel="referrer"><FaInstagram/></Link>
            <Link href="https://github.com/stanleylew5" className="text-[11vw] md:text-[7vw] flex justify-center text-stanley-white-100 hover:scale-105 hover:text-stanley-gray-200" target="_blank" rel="referrer"><FaGithub/></Link>
            <Link href="https://www.linkedin.com/in/stanleylew5/" className="text-[11vw] md:text-[7vw] flex justify-center text-stanley-white-100 hover:scale-105 hover:text-stanley-gray-200" target="_blank" rel="referrer"><FaLinkedin/></Link>
            <Link href="mailto:stanley43595@gmail.com" className="text-[11vw] md:text-[7vw] flex justify-center text-stanley-white-100 hover:scale-105 hover:text-stanley-gray-200" target="_blank" rel="referrer"><MdEmail/></Link>
          </motion.div>
        </div>
      </div>
    );  
  };
  export default Contacts;