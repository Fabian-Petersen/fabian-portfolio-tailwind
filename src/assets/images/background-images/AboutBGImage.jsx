import { motion } from "framer-motion";
import aboutVariants from "../../../animations/aboutAnimate";

const AboutBGImage = () => {
  const [parentContainer, childContainer] = aboutVariants;
  return (
    <div className="h-full w-full">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xlinkHref="http://www.w3.org/1999/xlink"
        data-svgjs="http://svgjs.dev/svgjs"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 2280 1520"
        variants={parentContainer}
        initial="initialState"
        animate="animateState"
      >
        <g mask='url("#SvgjsMask1017")' fill="none">
          <rect
            width="100%"
            height="100%"
            x="0"
            y="0"
            fill="rgba(5, 15, 26, 1)"
          ></rect>
          <motion.path
            variants={childContainer}
            d="M1685.42 306.73C1577.09 312.21 1511.19 511.12 1298.33 502.73 1085.47 494.34 1065.92 17.7 911.24-49.24"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            variants={childContainer}
            d="M1710.55 112.54C1576.64 115.43 1463.48 298.15 1207.67 297.34 951.87 296.53 860.1-56.12 704.8-75.74"
            stroke="rgba(20, 60, 101, 0.2)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            variants={childContainer}
            d="M1490.75 208.48C1379.92 208.26 1271.88 138.48 1053 138.48 834.13 138.48 842.6 210.8 615.26 208.48 387.91 206.16 311.55-91.65 177.51-107.59"
            stroke="rgba(20, 60, 101, 0.2)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            variants={childContainer}
            d="M1479.25 337.62C1373.92 337.38 1271.51 267.62 1063.77 267.62 856.03 267.62 873.16 344.41 648.29 337.62 423.42 330.83 375.82-44.3 232.81-77.78"
            stroke="rgba(20, 60, 101, 0.2)"
            strokeWidth="2"
          ></motion.path>
          <motion.path
            variants={childContainer}
            d="M1533.05 468.39C1421.46 468.17 1312.62 398.39 1092.2 398.39 871.77 398.39 901.69 483.48 651.35 468.39 401.01 453.3 376.72-22.48 210.5-80.14"
            stroke="rgba(20, 60, 101, 0.2)"
            strokeWidth="2"
          ></motion.path>
        </g>
        <defs>
          <mask id="SvgjsMask1017">
            <rect width="100%" height="100%" fill="#ffffff"></rect>
          </mask>
        </defs>
      </motion.svg>
    </div>
  );
};

export default AboutBGImage;
