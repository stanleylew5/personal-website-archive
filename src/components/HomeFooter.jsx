"use client";
import React from "react";
import bouncer from '../../public/images/bouncingscroll.svg';
const HomeFooter = () => {

  return (
    <div className="bg-dark-gray">

      <p className="flex flex-col items-center text-4xl md:text-8xl text-amethyst drop-shadow-3xl">STANLEY LEW</p>
      
      <div className="flex justify-center">
        <button className="z-50 animate-bounce">
          <img src={bouncer.src} className=" w-[27px] md:w-full mt-[-0.5rem]"/>
        </button>
      </div>

    </div>
    
  );
};

export default HomeFooter;
