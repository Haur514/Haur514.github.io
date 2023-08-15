import SkillComponent from "../../component/SkillComponent.js";
import "./Skills.css";
import React from "react";
import { useEffect ,useState} from "react";
import ContentFrame from "../../component/ContentFrame.js";

async function loadLanguageYamlFile(){
  let tmp;
  await fetch("./content/programingLanguage.yaml")
  .then(res => res.blob())
  .then(blob => blob.text())
  .then(yamlAsString => {
      tmp = yamlAsString;
  })
  .catch(err => console.log(err));

  const jsYaml = require('js-yaml');
  return jsYaml.load(tmp);
}

function content() {

  const[language,setLanguage] = useState({like:[],used:[]});

  useEffect(() => {
    (async () => {
        setLanguage(await loadLanguageYamlFile());
    })();
  },[])

  useEffect(() => {
      if(!Object.keys(language).includes("like")){
          return;
      }
      setLanguage(language);
  },[language])

  return(
    <div>
      <div className="Category">Like:</div>
      <div className="Skills">
      {language["like"].map((e) => {
        return(
          <SkillComponent name={e["language"]} img={e["image"]} />
        );
      })}
      </div>
      <div className="Category">Have Used:</div>
      <div className="Skills">
      {language["used"].map((e) => {
        return(
          <SkillComponent name={e["language"]} img={e["image"]} />
        );
      })}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <ContentFrame title="Preferable Language" content={content()} />
  );
}

export default Skills;
