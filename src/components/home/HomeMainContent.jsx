import { motion } from "framer-motion";
import PropTypes from "prop-types";
import CTAButton from "./CTAButton";

const HomeMainContent = ({ animateLine }) => {
  return (
    <article className="col-start-2 col-end-3 px-8 my-auto">
      <motion.div
        className="text-primaryColor w-20 h-4 border-b-4 mb-4 border-primaryColor"
        variants={animateLine}
      ></motion.div>
      <h3 className="text-fontLightTheme dark:text-white text-[1rem] md:text-[1.2rem] lg:text-[1.25rem] mn-[0.25rem] tracking-wider">
        Hi, my name is
      </h3>
      <h1 className="text-fontLightTheme dark:text-white text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold mb-6">
        <span className="text-primaryColor">Fabian </span>Petersen
      </h1>
      <p className="text-fontLightTheme dark:text-white text-[1rem] tracking-wider md:text-[1.2rem] lg:text-[1.25rem] leading-2 normal-case mb-8">
        Welcome to my official portfolio website showcasing my work as a
        <span className="text-primaryColor"> Front End Developer.</span>
      </p>
      <CTAButton />
    </article>
  );
};

export default HomeMainContent;

HomeMainContent.propTypes = {
  animateLine: PropTypes.object,
};
