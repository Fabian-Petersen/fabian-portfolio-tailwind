import { motion } from "framer-motion";
import aboutVariants from "../../animations/aboutAnimate";

const [aboutInfo] = aboutVariants;

const MyInfo = () => {
  return (
    <div>
      <motion.p
        className="text-fontLightTheme dark:text-white text-[0.8rem] md:text-[1.2rem] tracking-wide py-4 px-8"
        variants={aboutInfo}
        initial="initialState"
        animate="animateState"
      >
        My journey began as a chemical engineer, during which I was involved in
        several software implementation projects with TotalEnergies. This
        experience sparked my interest in app development, and I eventually
        transitioned into a dedicated React Developer, a role I am incredibly
        passionate about today.
        <br />
        <br />
        As a developer, I am enthusiastic about learning new technologies and
        working on thrilling projects. Here is a list of technologies I have had
        the opportunity to work with so far, and I am continuously expanding my
        skill set.
      </motion.p>
    </div>
  );
};

export default MyInfo;
