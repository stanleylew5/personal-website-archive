import bar from "../../public/images/bar.svg";
import gear1 from "../../public/images/gear1.svg";
import Image from "next/image";
const Title = ({text}) => {
    return(
        <div className="z-50">
            <p className="text-7xl text-center text-stanley-white-100 font-bold tracking-widest">{text}</p>
            <div className="flex justify-center">
                <div className="inline-flex">
                    <Image src={bar} alt="bar"/>
                    <Image src={gear1} alt="gear" className="animate-spin mx-4"/>
                    <Image src={bar} alt="bar"/>
                </div>
            </div>
        </div>
    );
};
export default Title;