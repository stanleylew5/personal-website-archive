import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectRight = ({ image, name, description, icons, github, website }) => {
    return (
        <div className="text-stanley-white-100 grid grid-cols-5 mx-[5%] pb-[8vh] gap-4">
            <div className="col-span-3 bg-stanley-purple-500 mb-8 mt-2 drop-shadow-projectright">
                <div className="text-4xl font-bold pt-4 pl-4 tracking-widest">{name}</div>
                <div className="pt-4 pl-4 text-xl">{description}</div>
                <div className="inline-flex md:absolute md:bottom-0 gap-2 py-12 pb-2 pl-3">{icons}</div>
                <div className="inline-flex absolute bottom-0 text-3xl right-0 pr-2 pb-2 gap-2">
                    <Link href={github} className="text-stanley-white-100 hover:text-stanley-purple-100" title="Github Link" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Link>
                    <Link href={website} className="text-stanley-white-100 hover:text-stanley-purple-100" title="Website Link" target="_blank" rel="noopener noreferrer">
                        <CiGlobe />
                    </Link>
                </div>
            </div>
            <div className="col-span-2 border-1 border-stanley-purple-400">{image}</div>
        </div>
    );
}

export default ProjectRight;
