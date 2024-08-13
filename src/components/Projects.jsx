import Image from "next/image";
import hill3 from "../../public/images/hill3.svg";
import Title from "./Title.jsx";
const Projects = () => {
    return(
      <div className="bg-stanley-gray-400">
        <Image src={hill3} alt="hill3"/>
        <div className="">
          <Title text={"Projects"}/>
        </div>
      </div>
    );  
  };
  export default Projects;