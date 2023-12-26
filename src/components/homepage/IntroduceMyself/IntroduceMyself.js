
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { Back } from "../../../util/Back";
import ContentFrame from "../../component/ContentFrame";
function Content(){

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
      <span className="text-3xl">
        <a className="float-right" href={myself.twitter}><FontAwesomeIcon icon={faTwitter}/></a>
        <a className="float-right" href={myself.github}><FontAwesomeIcon icon={faGithub}/></a><br/>
      </span>
    </div>
  )
}

function IntroduceMyself() {
  return (
    <ContentFrame title="Myself" content={Content()}/>
  );
}

export default IntroduceMyself;
