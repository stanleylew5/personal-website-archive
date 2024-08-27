import Image from "next/image";
import Title from "../components/Title.jsx";
import hill3 from "../../public/images/hill3.svg";
const Contacts = () => {
    return(
      <div className="bg-stanley-gray-400">
        <Image src={hill3} alt="hill3" className="w-full" />
        <div className="pb-[8vh]">
          <Title text={"Contacts"} />
        </div>
      </div>
    );  
  };
  export default Contacts;