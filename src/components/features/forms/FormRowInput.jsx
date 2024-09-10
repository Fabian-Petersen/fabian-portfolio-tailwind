import propTypes from "prop-types";

//$ Note: Form Row Input Flowbite component
const FormRowInput = ({
  type,
  name,
  labelText,
  placeholderText,
  className,
  onChange,
  required,
}) => {
  return (
    <div className="relative z-0 w-full mb-2 group">
      <input
        type={type}
        name={name}
        id="first_name"
        className={className}
        onChange={onChange}
        required={required}
        placeholder={placeholderText}
      ></input>
      <label
        htmlFor={name}
        type={type}
        name={name}
        id="floating_email"
        className="peer-focus:font-medium absolute text-[0.8rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelText}
      </label>
    </div>
  );
};

FormRowInput.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  labelText: propTypes.string,
  placeholderText: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func,
  required: propTypes.bool,
};
export default FormRowInput;
