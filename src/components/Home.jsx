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

const Home = () => {

  return (
    <div className="bg-dark-gray h-screen">
     
      <p className="flex flex-col text-3xl md:text-8xl text-stone-gray drop-shadow-3xl items-center">SOFTWARE ENGINEER</p>
      
      <div className="grid grid-cols-1">
        <div>
          <motion.img
            src={leftpanel1.src} 
            className="absolute h-mdoutpanel ml-leftoutpanel mt-8"
            initial={{x: 80, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 1.4},
              opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
            }}
          />
          <motion.img
            src={leftpanel2.src} 
            className="absolute z-25 h-mdmidpanel ml-leftmidpanel mt-4"
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 1},
              opacity: {type: 'tween', ease: 'easeOut', duration: 1},
            }}
          />
          <motion.img
            src={leftpanel3.src} 
            className="absolute z-50 h-mdinpanel ml-leftinpanel"
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 0.75},
              opacity: {type: 'tween', ease: 'easeOut', duration: 0.75},
            }}
          />
          <motion.img
            src={rightpanel1.src} className="absolute h-mdoutpanel ml-rightoutpanel mt-8"
            initial={{x: -80, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 1.4},
              opacity: {type: 'tween', ease: 'easeOut', duration: 1.4},
            }}
          />
          <motion.img
            src={rightpanel2.src} 
            className="absolute z-25 h-mdmidpanel ml-rightmidpanel mt-4"
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 1},
              opacity: {type: 'tween', ease: 'easeOut', duration: 1},
            }}
          />
          <motion.img
            src={rightpanel3.src} 
            className="absolute z-50 h-mdinpanel ml-rightinpanel"
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              x: {type: 'tween', ease: 'easeOut', duration: 0.75},
              opacity: {type: 'tween', ease: 'easeOut', duration: 0.75},
            }}
          />
          <img src={pfp.src} id = "psp" alt="profile pic" className="mx-auto my-8 text-center w-1/4 drop-shadow-3xl" />
          
        </div>
      </div>

        <p className="flex flex-col items-center text-4xl md:text-8xl text-amethyst drop-shadow-3xl">STANLEY LEW</p>
        <div className="flex justify-center">
          <button className="z-50 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
          <g filter="url(#filter0_d_20_52)">
            <circle cx="26.5" cy="22.5" r="22.5" fill="#8474B1"/>
          </g>
          <path d="M38.0217 17.5109L26.5109 29.0217L15 17.5109" stroke="#2B2929" strokeWidth="4"/>
          <defs>
            <filter id="filter0_d_20_52" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_52"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_52" result="shape"/>
            </filter>
          </defs>
            </svg>
          </button>
        </div>
    </div>
    
  );
};

export default Home;
