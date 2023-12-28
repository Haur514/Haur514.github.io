import { useEffect, useState } from "react";
import { Back } from "../../../util/Back.js";
import ContentFrame from "../../component/ContentFrame.js";
import WorkComponent from "../../component/WorkComponent.js";

function Content() {

  const [myapps,setMyapps] = useState([{name:"",description:"",image:"",github_url:"",trial_url:"",tags:[]}]);

  useEffect(() => {
    (async () => {
      let tmp = await Back.fetch_yaml("./content/myapp.yaml");
        setMyapps(tmp["myapp"]);
    })();
  },[])

  return(
  <div className="w-full">
    {myapps.map((e) => {
      console.log(e["github_url"]);
      return(
        <WorkComponent key={e} name={e["name"]} description={e["description"]} imgSrc={e["image"]} tags={e["tags"]} github_url={e["github_url"]} trial_url={e["trial_url"]}/>
      );
    })}
  </div>
  );
}

function Works() {
  return (
    <ContentFrame title="Works" content={Content()} />
  );
}

export default Works;
