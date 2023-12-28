import {navigations} from "../app/data/navigations"
import Link from "next/link";
// will finish this later i have no clue what i am doing :D may or may not use this file but will keep it here for now
const Navigation = () => {
    return(
        <div className = "justify-center z-50 text-white">
            {navigations.map((navigation, index) => (
            <Link key = {index} href = {navigation.link}>

            </Link>
            ))}
      </div>
    );  
  };
  export default Navigation;

 