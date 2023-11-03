import { motion } from "framer-motion";
import skills from "../../assets/data/skillsData";
import aboutVariants from "../../animations/aboutAnimate";

const uniqueSkill = [...new Set(skills.map((item) => item.node))];

const [
  skillsParentContainer,
  skillsChildContainer,
  skillsHeading,
  headingMySkills,
  lineVariant,
] = aboutVariants;

const MySkills = () => {
  return (
    <motion.div variants={""}>
      {/* <!-- about info --> */}
      <article className="px-8">
        <motion.h3
          className="text-fontLightTheme dark:text-white text-center text-[1.5rem] uppercase p-8"
          variants={headingMySkills}
          initial="initialState"
          animate="animateState"
        >
          My Skills
        </motion.h3>
        <div className="flex flex-col gap-[2rem]">
          {uniqueSkill.map((skill, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-6 text-fontLightTheme dark:text-white"
              >
                <motion.h3
                  className="uppercase"
                  custom={i}
                  variants={skillsHeading}
                  initial="initialState"
                  animate="animateState"
                >
                  {skill}
                </motion.h3>
                <motion.div
                  className="flex flex-wrap gap-8"
                  variants={skillsParentContainer}
                  initial="initialState"
                  animate="animateState"
                >
                  {skills
                    .filter((item) => item.node === skill)
                    .map((item, i) => {
                      const { id, icon, styling } = item;
                      return (
                        <motion.div
                          key={id}
                          className="flex flex-col items-center gap-6"
                          custom={i}
                          variants={skillsChildContainer}
                        >
                          <motion.div
                            styling={styling}
                            className={`${styling}`}
                            variants={skillsChildContainer}
                          >
                            <img
                              className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
                              src={icon}
                              alt={id}
                            />
                          </motion.div>
                          <motion.p
                            className="text-center uppercase text-[0.8rem] tracking-wider"
                            variants={skillsChildContainer}
                          >
                            {id}
                          </motion.p>
                        </motion.div>
                      );
                    })}
                </motion.div>
                <motion.hr
                  className="border-[0.25px] border-opacity-[15%] border-gray-400 w-[90%] self-center"
                  variants={lineVariant}
                  initial="initialState"
                  animate="animateState"
                />
              </div>
            );
          })}
        </div>
      </article>
    </motion.div>
  );
};

export default MySkills;
