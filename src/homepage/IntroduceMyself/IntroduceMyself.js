import "./IntroduceMyself.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

function IntroduceMyself() {
  return (
    <>
    <div className="IntroduceMyselfTitle">Myself</div>
    <div className="IntroduceMyself">
      <span className="IntroduceMyself-text">
        Hi, Im Haruka from Osaka University, one of the most influential universities in Japan. Please contact the following regarding work.<br></br>
      </span>
      <span className="ContactInformationPane">
        <a className="ContactInformation" href="https://twitter.com/XLPTE"><FontAwesomeIcon icon={faTwitter}/></a>
        <a className="ContactInformation" href="https://github.com/Haur514"><FontAwesomeIcon icon={faGithub}/></a><br></br>
      </span>
    </div>
    </>
  );
}

export default IntroduceMyself;
