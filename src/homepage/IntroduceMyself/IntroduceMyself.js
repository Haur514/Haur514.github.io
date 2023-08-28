import "./IntroduceMyself.css";

import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import ContentFrame from "../../component/ContentFrame";
import { Back } from "../../util/Back";
function content(){

  const[myself,setMyself] = useState({introduction:"",twitter:"",github:""});

  useEffect(() => {
    (async () => {
        setMyself(await Back.fetch_yaml("./content/myself.yaml"));
    })();
  },[])

  return(
    <div>
      <span>
        {myself.introduction}
      </span>
      <br/>
      <span className="ContactInformationPane">
        <a className="ContactInformation" href={myself.twitter}><FontAwesomeIcon icon={faTwitter}/></a>
        <a className="ContactInformation" href={myself.github}><FontAwesomeIcon icon={faGithub}/></a><br/>
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
