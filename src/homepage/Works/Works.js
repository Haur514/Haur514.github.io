import WorkComponent from "../../component/WorkComponent.js";
import "./Works.css";
import ContentFrame from "../../component/ContentFrame.js";
import React from "react";
import { useState, useEffect } from "react";

async function loadMyAppYamlFile(){
  let tmp;
  await fetch("./myapp.yaml")
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
      tmp = yamlAsString;
  })
  .catch(err => console.log(err));

  const jsYaml = require('js-yaml');
  console.log(tmp);
  console.log(jsYaml.load(tmp));
  return jsYaml.load(tmp);
}


function content() {

  const [myapps,setMyapps] = useState([{name:"",description:"",image:"",tags:[]}]);

  useEffect(() => {
    (async () => {
      let tmp = await loadMyAppYamlFile();
        setMyapps(tmp["myapp"]);
    })();
  },[])

  return(
  <div className="Works">
    {myapps.map((e) => {
      return(
        <WorkComponent name={e["name"]} description={e["description"]} imgSrc={e["image"]} tags={e["tags"]} urls={["https://github.com/Haur514/RatioTimer"]} />
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
