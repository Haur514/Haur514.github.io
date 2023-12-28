
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { Back } from "../../../util/Back";
import ContentFrame from "../../component/ContentFrame";
function Content(){

  const[myself,setMyself] = useState({introduction:"",twitter:"",github:""});

  useEffect(() => {
    (async () => {
        setMyself(await Back.fetch_yaml("/content/myself.yaml"));
    })();
  },[])

  return(
    <div>
      <span>
        {myself.introduction}
      </span>
      <br/>
      <span className="text-3xl m-2">
        <a className="float-right" href={myself.twitter}>
          <FontAwesomeIcon className="hover:text-purple-800 m-2" icon={faTwitter}/>
        </a>
        <a className="float-right" href={myself.github}>
          <FontAwesomeIcon className="hover:text-purple-800 m-2" icon={faGithub}/>
        </a>
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
