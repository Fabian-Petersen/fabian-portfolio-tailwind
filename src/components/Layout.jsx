import propTypes from "prop-types";
// import SectionHeading from "./features/SectionHeadings";

const Layout = ({ children }) => {
  return <div className="">{children}</div>;
};

Layout.propTypes = {
  // title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Layout;
