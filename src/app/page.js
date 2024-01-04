import React from "react";
import HomeFooter from "@/components/HomeFooter";
import Navigation from "@/components/Navigations";
import Panels from "@/components/Panels";
import HomeTitle from "@/components/HomeTitle";
import scrollstyles from '../app/styles/scrollbar.css'
export default function main() {
  return (
    <main>
      <div className="bg-dark-gray">
        <Navigation/>
        <HomeTitle/>
        <Panels/>
        <HomeFooter/>
      </div>  
    </main>
  )
}
