import { motion } from "framer-motion";
import bgSVGVariants from "../../../animations/backgoundSVGAnimate";

const ProjectBGImage = () => {
  const [parentContainer, childContainer] = bgSVGVariants;
  return (
    <div className="h-full w-full absolute z-[-1]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlinkHref="http://www.w3.org/1999/xlink"
        data-svgjs="http://svgjs.dev/svgjs"
        width="1440"
        height="760"
        preserveAspectRatio="none"
        viewBox="0 0 1440 760"
        variants={parentContainer}
        initial="initialState"
        animate="animateState"
      >
        <g mask='url("#SvgjsMask1483")' fill="none">
          <rect
            width="1440"
            height="760"
            x="0"
            y="0"
            fill="rgba(5, 15, 26, 1)"
          ></rect>
          <motion.path
            variants={childContainer}
            d="M28.51 171.01L96.06 210.01L96.06 288.01L28.51 327.01L-39.04 288.01L-39.04 210.01zM298.72 171.01L366.27 210.01L366.27 288.01L298.72 327.01L231.17 288.01L231.17 210.01zM501.37 288.01L568.93 327.01L568.93 405.01L501.37 444.01L433.82 405.01L433.82 327.01zM433.82 405.01L501.37 444.01L501.37 522.01L433.82 561.01L366.27 522.01L366.27 444.01zM433.82 639.01L501.37 678.01L501.37 756.01L433.82 795.01L366.27 756.01L366.27 678.01zM568.93 -62.99L636.48 -23.99L636.48 54.01L568.93 93.01L501.37 54.01L501.37 -23.99zM771.58 54.01L839.13 93.01L839.13 171.01L771.58 210.01L704.03 171.01L704.03 93.01zM704.03 639.01L771.58 678.01L771.58 756.01L704.03 795.01L636.48 756.01L636.48 678.01zM906.68 54.01L974.24 93.01L974.24 171.01L906.68 210.01L839.13 171.01L839.13 93.01zM839.13 405.01L906.68 444.01L906.68 522.01L839.13 561.01L771.58 522.01L771.58 444.01zM974.24 405.01L1041.79 444.01L1041.79 522.01L974.24 561.01L906.68 522.01L906.68 444.01zM1109.34 405.01L1176.89 444.01L1176.89 522.01L1109.34 561.01L1041.79 522.01L1041.79 444.01zM1447.1 54.01L1514.65 93.01L1514.65 171.01L1447.1 210.01L1379.55 171.01L1379.55 93.01z"
            stroke="rgba(20, 60, 101, 0.3)"
            strokeWidth="2"
          ></motion.path>
        </g>
        <defs>
          <mask id="SvgjsMask1483">
            <rect width="1440" height="760" fill="#ffffff"></rect>
          </mask>
        </defs>
      </motion.svg>
    </div>
  );
};

export default ProjectBGImage;
