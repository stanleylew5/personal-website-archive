"use client";
import React from "react";
import { motion } from "framer-motion";
import pfp from "../../public/images/psp.png";
import leftpanel1 from "../../public/panels/leftpanel1.svg"
import leftpanel2 from "../../public/panels/leftpanel2.svg"
import leftpanel3 from "../../public/panels/leftpanel3.svg"
import rightpanel1 from "../../public/panels/rightpanel1.svg"
import rightpanel2 from "../../public/panels/rightpanel2.svg"
import rightpanel3 from "../../public/panels/rightpanel3.svg"

const Panels = () => {
    return(
        <div className="grid grid-cols-1 m-16">
            <div>
            <motion.img
                src={leftpanel1.src} 
                className="absolute left-0 md:h-mdoutpanel h-[14%] md:mt-[-2.1%] mt-[-4%] ml-[4%]"
                initial={{x: 80, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}
            />
            <motion.img
                src={leftpanel2.src} 
                className="absolute left-0 md:h-mdmidpanel h-[16%] md:mt-[-3.3%] mt-[-6.1%] z-25 ml-[12%]"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 1},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1},
                }}
            />
            <motion.img
                src={leftpanel3.src} 
                className="absolute left-0 md:h-mdinpanel h-[18%] md:mt-[-4.6%] mt-[-8.2%] z-50 ml-[20%]"
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 0.75},
                opacity: {type: 'tween', ease: 'easeOut', duration: 0.75},
                }}
            />
           
            <motion.img
                src={rightpanel1.src} 
                className="absolute right-0 md:h-mdoutpanel h-[14%] md:mt-[-2.1%] mt-[-4%] mr-[4%]"
                initial={{x: -80, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 1.4},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
                }}
            />
            <motion.img
                src={rightpanel2.src} 
                className="absolute right-0 md:h-mdmidpanel h-[16%] md:mt-[-3.3%] mt-[-6.1%] z-25 mr-[12%]"
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 1},
                opacity: {type: 'tween', ease: 'easeOut', duration: 1},
                }}
            />
            <motion.img
                src={rightpanel3.src} 
                className="absolute right-0 md:h-mdinpanel h-[18%] md:mt-[-4.6%] mt-[-8.2%] z-50 mr-[20%]"
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                x: {type: 'tween', ease: 'easeOut', duration: 0.75},
                opacity: {type: 'tween', ease: 'easeOut', duration: 0.75},
                }}
            />
             <img src={pfp.src} id = "psp" alt="profile pic" className="flex mx-auto md:w-1/4 w-1/3 drop-shadow-3xl justify-center" /> 
        </div>
      </div>
    );  
  };
  export default Panels;