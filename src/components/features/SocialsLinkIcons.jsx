import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className="col-start-1 col-end-2 fixed flex flex-col gap-[2rem] z-50 top-[50%] left-[3%] transform -translate-y-[50%]"
    >
      {socialLinks.map((link) => {
        const { id, icon, href, tooltip, iconColor } = link;

        return (
          <Tooltip
            key={id}
            content={tooltip}
            placement="right"
            className={iconColor}
          >
            <Link to={href}>
              <motion.li
                variants={childContainer}
                className={`pageLinkIcons ${iconColor} border-none`}
              >
                <FontAwesomeIcon icon={icon} className="text-white iconSize" />
              </motion.li>
            </Link>
          </Tooltip>
        );
      })}
    </motion.ul>
  );
};

export default SocialsLinkIcons;
