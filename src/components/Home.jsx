import img1 from "../../public/images/professional.png";
import { navigation } from "@/app/data/navigation";

const Home = () => {
  return (
    <div className="bg-dark-gray h-screen flex flex-col items-center justify-center p-12">
      <p className=" text-3xl md:text-8xl text-stone-gray drop-shadow-3xl">SOFTWARE ENGINEER</p>
      <div className="mt-8 mb-8 text-center">
        <img src={img1.src} alt="profile pic" className="w-1/2 h-auto mx-auto drop-shadow-3xl" />
      </div>
      <p className="text-4xl md:text-8xl text-amethyst drop-shadow-3xl">STANLEY LEW</p>
    </div>
  );
};

export default Home;
