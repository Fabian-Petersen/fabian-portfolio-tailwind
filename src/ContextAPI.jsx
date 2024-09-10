import { useState, createContext } from "react";
import projects from "../src/assets/data/projectData";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [projectMenu, setProjectMenu] = useState(projects);
  const [buttonCategory, setButtonCategory] = useState([]);
  const [activeButton, setActiveButton] = useState("ALL");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(true);
  const [theme, setTheme] = useState("");
  const [visible, setVisible] = useState(false);
  //$ Store all the inserted information in the create new booking variable.
  const [contactData, setContactData] = useState({
    name: "Fabian",
    surname: "Petersen",
    contact: "071 348 5647",
    agency: "ABC Web Developement Agency",
    message: "Testing the message form",
  });

  return (
    <AppContext.Provider
      value={{
        projects,
        projectMenu,
        setProjectMenu,
        activeButton,
        setActiveButton,
        openSidebar,
        setOpenSidebar,
        theme,
        setTheme,
        toggleTheme,
        setToggleTheme,
        buttonCategory,
        setButtonCategory,
        visible,
        setVisible,
        contactData,
        setContactData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
