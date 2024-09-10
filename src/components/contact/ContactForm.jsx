import FormRowInput from "../features/forms/FormRowInput";
import FormRowTextArea from "../features/forms/FormRowTextArea";
import useGlobalContext from "../../customHooks/useGlobalContext";

const ContactForm = () => {
  const { contactData, setContactData } = useGlobalContext();

  const handleChange = (e) => {
    setContactData((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(contactData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-md w-full">
      <FormRowInput
        name="name"
        labelText="Enter your Name"
        placeholderText=""
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleChange}
      />
      <FormRowInput
        name="surname"
        labelText="Surname"
        placeholderText=""
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleChange}
      />
      <FormRowInput
        name="contact"
        labelText="Contact Number"
        placeholderText=""
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleChange}
      />
      <FormRowInput
        name="agency"
        labelText="Agency"
        placeholderText=""
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleChange}
      />
      <FormRowTextArea
        name="message"
        row={3}
        labelText="Message...."
        placeholderText=""
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
