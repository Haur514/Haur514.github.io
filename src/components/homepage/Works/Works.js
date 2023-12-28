import { useEffect, useState } from "react";
import { Back } from "../../../util/Back.js";
import ContentFrame from "../../component/ContentFrame.js";
import WorkComponent from "../../component/WorkComponent.js";

function Content() {

  const [myapps,setMyapps] = useState([{name:"",description:"",image:"",url:"",tags:[]}]);

  useEffect(() => {
    (async () => {
      let tmp = await Back.fetch_yaml("./content/myapp.yaml");
        setMyapps(tmp["myapp"]);
    })();
  },[])

  return(
  <div className="w-full">
    {myapps.map((e) => {
      return(
        <WorkComponent key={e} name={e["name"]} description={e["description"]} imgSrc={e["image"]} tags={e["tags"]} url={e["url"]} />
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
