import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import buttonVariants from "../../animations/projectPage/filterButtonsAnimate";

const CTAButton = () => {
  return (
    <motion.div variants={buttonVariants}>
      <Link to="/projects">
        <Button className="tracking-wider">My Projects</Button>
      </Link>
    </motion.div>
  );
};

export default CTAButton;
