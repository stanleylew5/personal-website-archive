const Title = ({text}) => {
    return(
        <div className="bg-gradient-to-r from-stanley-black-300 to-stanley-gray-100">
            <p className="relative flex items-center justify-center text-3xl md:text-5xl text-stanley-white-100 z-20">{text}</p>
        </div>
    );
};
export default Title;