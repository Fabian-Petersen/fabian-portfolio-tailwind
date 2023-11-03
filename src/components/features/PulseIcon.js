import Wrapper from "../styleWrappers/stylePulseIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const PulseIcon = ({ code, url }) => {
  return (
    <Wrapper>
      <div className="project-container">
        <div className="container">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project-code-link"
          >
            <div className="pulse">
              <FontAwesomeIcon
                icon={faGlobe}
                className="code-icon"
                onClick={() => console.log({ url })}
              />
            </div>
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="project-code-link"
          >
            <div className="pulse">
              <FontAwesomeIcon
                icon={faGithub}
                className="code-icon"
                onClick={() => console.log({ url })}
              />
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default PulseIcon;

PulseIcon.propTypes = {
  code: PropTypes.string,
  url: PropTypes.string,
};
