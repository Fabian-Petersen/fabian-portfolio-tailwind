import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex items-center logo ml-[1rem] md:ml-[3rem] h-full text-[1.6rem] md:text-[2rem] text-white font-greatVibes tracking-wide">
      <Link to="/">
        <p className=" dark:text-white text-fontLightTheme">
          Fabian<span className="text-primaryColor">.</span>
        </p>
      </Link>
    </div>
  );
};

export default Logo;
