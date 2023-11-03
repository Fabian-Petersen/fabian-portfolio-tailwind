import SectionHeading from "../features/SectionHeadings";
import { FilterButtons } from "../../components/index";
// import { Link } from "react-router-dom";
import useGlobalContext from "../../ContextAPI";
import { motion } from "framer-motion";
// import projectVariants from "../animations/projectPage/projectAnimate";
import headingVariants from "../../animations/pageHeadingAnimate";

const ProjectMainContent = () => {
  const { projectMenu } = useGlobalContext();
  // const [parentContainer, childContainer] = projectVariants;
  const [parentContainerHeading, childContainerHeading] = headingVariants;
  console.log(projectMenu);
  return (
    <section className="section-center section" id="projects">
      <SectionHeading title={"Projects"} />
      <FilterButtons className="filterButtons" />
      <motion.div
        className="section-title"
        variants={parentContainerHeading}
        initial="initialState"
        animate="animateState"
        exit="exit"
        layout
      >
        <motion.h2
          variants={childContainerHeading}
          initial="initialState"
          animate="animateState"
        >
          Projects
        </motion.h2>
        <motion.div
          className="underline"
          variants={childContainerHeading}
        ></motion.div>
      </motion.div>
      <motion.p
        className="projects-text"
        variants={""}
        initial="initialState"
        animate="animateState"
      >
        My latest completed projects
      </motion.p>
    </section>
  );
};

export default ProjectMainContent;
