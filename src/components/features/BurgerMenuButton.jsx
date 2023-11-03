import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGlobalContext from "../../customHooks/useGlobalContext";

const BurgerMenuButton = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <button
      className={
        openSidebar
          ? "show-sidebar mx-[1rem] dark:text-white"
          : "hide-sidebar mx-[1rem]"
      }
      id="nav-btn"
      onClick={() => setOpenSidebar(!openSidebar)}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default BurgerMenuButton;
