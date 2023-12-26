import { useEffect, useState } from "react";
import { Back } from "../../../util/Back.js";
import ContentFrame from "../../component/ContentFrame.js";
import SkillComponent from "../../component/SkillComponent.js";

function categoryStyle(){
  return {textShadow: "0 0 1px #8080ed, 0 0 3px #8080ed, 0 0 6px #8080ed"};
}
function content() {

  const[language,setLanguage] = useState({like:[],used:[]});

  useEffect(() => {
    (async () => {
        setLanguage(await Back.fetch_yaml("./content/programingLanguage.yaml"));
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
      <div className="font-bold text-xl" style={categoryStyle()}>Like:</div>
      <div className="Skills">
      {language["like"].map((e) => {
        return(
          <SkillComponent name={e["language"]} img={e["image"]} />
        );
      })}
      </div>
      <div className="font-bold text-xl" style={categoryStyle()}>Have Used:</div>
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