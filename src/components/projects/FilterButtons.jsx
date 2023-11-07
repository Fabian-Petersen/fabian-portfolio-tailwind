import useGlobalContext from "../../customHooks/useGlobalContext";
import projects from "../../assets/data/projectData";
import { motion } from "framer-motion";
import buttonVariants from "../../animations/projectPage/filterButtonsAnimate";
import { Button } from "flowbite-react";

const AnimatedButton = motion(Button);

const FilterButtons = () => {
  const { setProjectMenu, activeButton, setActiveButton } = useGlobalContext();
  const [parentContainer, childContainer] = buttonVariants;

  // Filter out the projects that match the language of the button and set the active class to higlight the button
  const handleClick = (lang) => () => {
    setActiveButton(lang);
    const filteredProjects = projects.filter(
      (project) => project.language === lang
    );

    setProjectMenu(filteredProjects);
  };

  // Display all the projects once ALL buttons clicked
  const reset = () => {
    setProjectMenu(projects);
    setActiveButton(" ");
  };

  // Filter out the program languages returned from the projects data that was used in projects.
  const usedLanguages = [
    ...new Set(projects.map((project) => project.language)),
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-[1rem] w-[50%] mx-auto md:mt-[2rem]"
      variants={parentContainer}
      initial="initialState"
      animate="animateState"
    >
      {usedLanguages.map((language, index) => {
        return (
          <AnimatedButton
            variants={childContainer}
            key={index}
            className={
              activeButton === language
                ? " active text-white tracking-wider flex-1 capitalize"
                : "text-white tracking-wider flex-1 capitalize"
            }
            onClick={handleClick(language)}
          >
            {language}
          </AnimatedButton>
        );
      })}
      <AnimatedButton
        className="btn-primary text-white tracking-wider flex-1 capitalize"
        onClick={reset}
        variants={childContainer}
      >
        All
      </AnimatedButton>
    </motion.div>
  );
};

export default FilterButtons;
