import propTypes from "prop-types";

// $ Note: Form Row Input Flowbite component.
// $ Use the className prop to add any additional classes to the input element.
const FormRowTextArea = ({
  name,
  labelText,
  placeholderText,
  className,
  onChange,
  row,
}) => {
  return (
    <div className="z-0 col-span-full mb-5 group">
      {labelText && (
        <label
          htmlFor={name}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {labelText}
        </label>
      )}
      <textarea
        name={name}
        className={className}
        placeholder={placeholderText}
        onChange={onChange}
        rows={row}
      ></textarea>
    </div>
  );
};

FormRowTextArea.propTypes = {
  type: propTypes.string,
  row: propTypes.number,
  name: propTypes.string,
  labelText: propTypes.string,
  placeholderText: propTypes.string,
  className: propTypes.string,
  onChange: propTypes.func,
  required: propTypes.bool,
};

export default FormRowTextArea;
