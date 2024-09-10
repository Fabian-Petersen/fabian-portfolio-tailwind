import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardData = [
  { title: " Email", icon: faEnvelope, detail: "fpetersen2@gmail.com" },
  { title: "Mobile", icon: faPhone, detail: "+27 71 386 0827" },
  { title: "Location", icon: faLocation, detail: "Cape Town" },
];

const CardFlowbite = () => {
  return (
    <div className="grid gap-[1rem] max-w-[20rem] p-4">
      {/* // $ Map over cardData array and return a card for each item in the array. */}
      {cardData.map((card, index) => {
        const { title, icon, detail } = card;
        return (
          <div
            key={index}
            className="max-w-sm p-6 bg-gray-200 border-none rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <span className="">
              <FontAwesomeIcon className="w-[1.3rem] h-[1.3rem] " icon={icon} />
            </span>
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-grabg-gray-200">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {detail}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardFlowbite;
