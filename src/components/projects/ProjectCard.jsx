import { motion, AnimatePresence } from "framer-motion";
import projectVariants from "../animations/projectPage/projectAnimate";
import useGlobalContext from "../../customHooks/useGlobalContext";
import { PulseIcon } from "../../components/features/PulseIcon";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const { projectMenu } = useGlobalContext();
  const [parentContainer, childContainer] = projectVariants;
  return (
    <motion.div
      className="projects-center"
      variants={parentContainer}
      initial="initialState"
      animate="animateState"
      exit="exit"
      layout
    >
      {projectMenu.map((item) => {
        const { id, name, language, image, code, url } = item;
        return (
          <AnimatePresence key={id}>
            <motion.div className="project-card" variants={childContainer}>
              <img src={image} alt={name} className="project-img" />
              <div className="card-body">
                <Link to={`/projects/${id}`}>
                  <h4 className="project-title">{name}</h4>
                </Link>
                <p>Designed with {language}</p>
                <PulseIcon code={code} url={url} />
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </motion.div>
  );
};

export default ProjectCard;
