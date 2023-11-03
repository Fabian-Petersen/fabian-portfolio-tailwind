import { AppContext } from "../ContextAPI";
import { useContext } from "react";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
