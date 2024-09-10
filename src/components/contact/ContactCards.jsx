import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../../assets/icons/icons";
import headingVariants from "../../animations/pageHeadingAnimate";

const ContactCards = () => {
  const { faEnvelope, faPhone, faLocationDot } = Icons;
  const [parentContainerHeading, childContainerHeading] = headingVariants;
  return (
    <div className="border border-green-500">
      <motion.div
        className="section-title"
        variants={parentContainerHeading}
        initial="initialState"
        animate="animateState"
      >
        <motion.h2 variants={childContainerHeading}>
          Lets get in touch
        </motion.h2>
        <motion.div
          className="underline"
          variants={childContainerHeading}
        ></motion.div>
      </motion.div>
      <div className="contact-container">
        <div className="contact-detail-cards">
          <div className="contact-detail-card">
            <div className="contact-detail-heading">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <h3>Email</h3>
            </div>
            <p>fpetersen2@gmail.com</p>
          </div>
          <div className="contact-detail-card">
            <div className="contact-detail-heading">
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <h3>Mobile</h3>
            </div>
            <p>071 386 0827</p>
          </div>
          <div className="contact-detail-card">
            <div className="contact-detail-heading">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <h3>Location</h3>
            </div>
            <p>Cape Town</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
