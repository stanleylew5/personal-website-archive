"use client";
import { motion } from "framer-motion";
import bar from "../../public/images/bar.svg";
import gear1 from "../../public/images/gear1.svg";
import Image from "next/image";
const Title = ({text}) => {
    return(
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        className="z-50">
            <p className="text-4xl md:text-7xl text-center text-stanley-white-100 font-bold tracking-widest">{text}</p>
            <div className="flex justify-center">
                <div className="inline-flex">
                    <Image src={bar} alt="bar" className="w-[15vw] md:w-[5vw]"/>
                    <Image src={gear1} alt="gear" className="w-[7vw] md:w-[2vw] animate-spin mx-4"/>
                    <Image src={bar} alt="bar" className="w-[15vw] md:w-[5vw]"/>
                </div>
            </div>
        </motion.div>
    );
};
export default Title;