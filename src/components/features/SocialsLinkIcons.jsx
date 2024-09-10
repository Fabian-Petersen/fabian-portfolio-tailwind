// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import socialLinks from "../../assets/data/socialsLinkData";
import iconSocialLinksVariants from "../../animations/iconSocialLinksAnimate";
import { motion } from "framer-motion";

const SocialsLinkIcons = () => {
  const [parentContainer, childContainer] = iconSocialLinksVariants;
  return (
    <motion.ul
      variants={parentContainer}
      initial="initialState"
      animate="animateState"
      className="sm:col-start-1 sm:col-end-2 fixed flex md:flex-col gap-[1rem] md:gap-[2rem] z-[50] top-[75%] left-[5%] md:top-[50%] md:left-[3%] transform -translate-y-[50%]"
    >
      {socialLinks.map((link) => {
        const { id, icon: IconComponent, href, tooltip, iconColor } = link;

        return (
          <Tooltip
            key={id}
            content={tooltip}
            placement="top"
            className={iconColor}
          >
            <Link to={href}>
              <motion.li
                variants={childContainer}
                className={`pageLinkIcons ${iconColor} border-transparent dark:border-transparent hover:border-[1.5px] hover:border-yellow-400`}
              >
                <IconComponent className="text-white iconSize`" />
              </motion.li>
            </Link>
          </Tooltip>
        );
      })}
    </motion.ul>
  );
};

export default SocialsLinkIcons;

{
  /* <FontAwesomeIcon icon={icon} className="text-white iconSize" /> */
}
