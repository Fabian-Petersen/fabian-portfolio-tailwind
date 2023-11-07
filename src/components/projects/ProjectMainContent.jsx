import SectionHeading from "../features/SectionHeadings";
import FilterButtons from "../../components/projects/FilterButtons";
import ProjectCard from "../../components/projects/ProjectCard";
import { motion } from "framer-motion";
// import projectVariants from "../animations/projectPage/projectAnimate";

const ProjectMainContent = () => {
  return (
    <section
      className="flex flex-col gap-2 col-start-2 col-end-3"
      id="projects"
    >
      <SectionHeading title={"Projects"} />
      <FilterButtons className="" />
      <motion.p
        className="text-fontLightTheme dark:text-white text-[1.2rem] md:text-[1.5rem] md:mt-[2rem] tracking-wider text-center"
        variants={""}
        initial="initialState"
        animate="animateState"
      >
        My latest completed projects
      </motion.p>
      <ProjectCard />
    </section>
  );
};

export default ProjectMainContent;
