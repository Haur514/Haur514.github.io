import React, { useEffect, useState } from "react";
import ContentFrame from "../../component/ContentFrame.js";
import WorkComponent from "../../component/WorkComponent.js";
import { Back } from "../../util/Back.js";
import "./Works.css";

function content() {

  const [myapps,setMyapps] = useState([{name:"",description:"",image:"",url:"",tags:[]}]);

  useEffect(() => {
    (async () => {
      let tmp = await Back.fetch_yaml("./content/myapp.yaml");
        setMyapps(tmp["myapp"]);
    })();
  },[])

  return(
  <div className="Works">
    {myapps.map((e) => {
      return(
        <WorkComponent name={e["name"]} description={e["description"]} imgSrc={e["image"]} tags={e["tags"]} url={e["url"]} />
      );
    })}
  </div>
  );
}

function Works() {
  return (
    <ContentFrame title="Works" content={content()} />
  );
}

export default Works;
