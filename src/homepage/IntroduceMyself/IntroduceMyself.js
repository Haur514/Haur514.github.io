import "./IntroduceMyself.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import ContentFrame from "../../component/ContentFrame";
import React from "react";


function content(){
  return(
    <div>
      <span>
        Hi, Im Haruka from Osaka University, one of the most influential universities in Japan. Please contact the following regarding work.<br/>
      </span>
      <span className="ContactInformationPane">
        <a className="ContactInformation" href="https://twitter.com/XLPTE"><FontAwesomeIcon icon={faTwitter}/></a>
        <a className="ContactInformation" href="https://github.com/Haur514"><FontAwesomeIcon icon={faGithub}/></a><br/>
      </span>
    </div>
  )
}

function IntroduceMyself() {
  return (
    <ContentFrame title="Myself" content={content()}/>
  );
}

export default IntroduceMyself;
