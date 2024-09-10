import propTypes from "prop-types";

const PageHeading = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold py-4 text-blue-600 tracking-wider text-center">
      {title}
    </h1>
  );
};

PageHeading.propTypes = {
  title: propTypes.string,
};

export default PageHeading;
