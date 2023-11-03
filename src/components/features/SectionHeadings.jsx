import headingVariants from "../../animations/pageHeadingAnimate";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionHeading = ({ title }) => {
  const [parentContainerHeading, childContainerHeading] = headingVariants;
  return (
    <motion.div
      className="flex flex-col gap-2 p-4 mt-12 items-center tracking-wider justify-center top-[10%] left-0 w-full text-[2rem] md:text-[2.5rem] text-fontLightTheme dark:text-white"
      variants={parentContainerHeading}
      initial="initialState"
      animate="animateState"
    >
      <motion.h2 id="testing" variants={childContainerHeading}>
        {title}
      </motion.h2>
      <motion.div
        className="h-[0.5rem] md:w-[8rem] bg-primaryColor"
        variants={childContainerHeading}
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeading;

SectionHeading.propTypes = {
  title: PropTypes.string,
};
