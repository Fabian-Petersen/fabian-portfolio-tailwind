import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/icons/icons";
import { useState } from "react";

const SocialsAnimation = () => {
  const [active, setActive] = useState(false);
  const { xmark, ellipses } = Icons;

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <ul className="relative flex flex-col gap-[2rem] z-50">
      {active ? (
        <li className="fixed top-[0%] left-[0%] flex px-4 z-50 w-[2.5rem] h-[2.5rem] border-[2.5px] border-white animate-menuOpenAnimation rounded-full items-center justify-center">
          <a href="#1">
            <FontAwesomeIcon icon={xmark} onClick={handleClick} />
          </a>
        </li>
      ) : (
        <li
          className="fixed flex z-50 w-[2.5rem] h-[2.5rem] border-[2.5px] border-white animate-menuCloseAnimation rounded-full items-center justify-center"
          onClick={handleClick}
        >
          <a href="#1">
            <FontAwesomeIcon icon={ellipses} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialsAnimation;
