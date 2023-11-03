import links from "../../assets/data/pageLinkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import iconPageLinksVariants from "../../animations/iconPageLinksAnimate";
import { Tooltip } from "flowbite-react";

const PageLinkIcons = () => {
  const [parentContainer, childContainer] = iconPageLinksVariants;
  return (
    <motion.ul
      className="fixed flex flex-col gap-[2rem] opacity-0 z-50 top-[50%] right-[3%] transform -translate-y-[50%]"
      variants={parentContainer}
      initial="initialState"
      animate="animateState"
    >
      {links.map((link) => {
        const { id, href, icon, tooltip } = link;
        return (
          <Tooltip key={id} content={tooltip} placement="left">
            <motion.li
              className="pageLinkIcons"
              variants={childContainer}
              data-tooltip-target="tooltip-animation"
            >
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? "isActive tooltip tooltip-left"
                    : "tooltip tooltip-left"
                }
              >
                <FontAwesomeIcon className="iconSize" icon={icon} />
              </NavLink>
            </motion.li>
          </Tooltip>
        );
      })}
    </motion.ul>
  );
};
export default PageLinkIcons;
