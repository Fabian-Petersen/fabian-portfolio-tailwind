// import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import buttonVariants from "../../animations/projectPage/filterButtonsAnimate";

const CTAButton = () => {
  return (
    <motion.div variants={buttonVariants}>
      <Link to="/projects">
        <button className="bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:translate-y-[1px] rounded-full text-gray-200 uppercase text-sm py-2 px-3 md:py-2.5 md:px-4  tracking-widest">
          My Projects
        </button>
      </Link>
    </motion.div>
  );
};

export default CTAButton;
