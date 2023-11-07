import { motion, AnimatePresence } from "framer-motion";
import projectVariants from "../../animations/projectPage/projectAnimate";
import useGlobalContext from "../../customHooks/useGlobalContext";
// import { PulseIcon } from "../../components/features/PulseIcon";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const { projectMenu } = useGlobalContext();
  const [parentContainer, childContainer] = projectVariants;
  return (
    <motion.div
      className="md:grid md:grid-cols-2 md:gap-2 md:mt-[2rem] lg:grid-cols-3 xl:grid-cols-4"
      variants={parentContainer}
      initial="initialState"
      animate="animateState"
      exit="exit"
      layout
    >
      {projectMenu.map((item) => {
        const { id, name, language, image } = item;
        return (
          <AnimatePresence key={id}>
            <motion.div
              className="relative flex flex-col justify-center items-center mx-auto rounded-[5px] mb-[2rem] w-[80%] md:w-[85%] h-[25rem] md:h-[20rem] bg-cover overflow-hidden"
              variants={childContainer}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full rounded-[5px] bg-center"
              />
              <div className="card-body">
                <Link to={`/projects/${id}`}>
                  <h4 className="project-title">{name}</h4>
                </Link>
                <p>Designed with {language}</p>
                {/* <PulseIcon code={code} url={url} /> */}
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </motion.div>
  );
};

export default ProjectCard;
