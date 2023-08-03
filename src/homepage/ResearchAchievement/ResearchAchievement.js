import { load } from "js-yaml";
import ContentFrame from "../../component/ContentFrame";
import "./ResearchAchievement.css"
import React from "react";
import { useState, useEffect } from "react";

async function loadAchievementYamlFile(){
    let tmp;
    await fetch("./achievement.yaml")
    .then(res => res.blob())
    .then(blob => blob.text())
    .then(yamlAsString => {
        tmp = yamlAsString;
    })
    .catch(err => console.log(err));

    const jsYaml = require('js-yaml');
    return jsYaml.load(tmp);
}

function getContent(){

    const [achievements,setAchievements] = useState([]);
    const [domesticConf,setDomesticConf] = useState([]);
    const [internationalConf,setInternationalConf] = useState([]);
    const [award,setAward] = useState([]);

    useEffect(() => {
        (async () => {
            setAchievements(await loadAchievementYamlFile());
        })();
    },[])

    useEffect(() => {
        if(!Object.keys(achievements).includes("conf")){
            return;
        }
        setDomesticConf(achievements["conf"]["domestic"])
        setInternationalConf(achievements["conf"]["international"])
        setAward(achievements["award"]);
    },[achievements])

    return(
        <div>
            <div className="conferenceCategory">Domestic Conference</div>
            <ul>
            {domesticConf.map((e) => {
                return (<li key={e}><a>{e["author"]}, {e["title"]}, {e["conference"]}, {e["year"]}<br/></a></li>);
            })}
            </ul>
            <br/>
            <div className="conferenceCategory">International Conference</div>
            <ul>
            {internationalConf.map((e) => {
                return (<li key={e}><a>{e["author"]}, {e["title"]}, {e["conference"]}, {e["year"]}<br/></a></li>);
            })}
            </ul>
            <br/>
            <div className="conferenceCategory">Award</div>
            <ul>
            {award.map((e) => {
                return (<li key={e}><a>{e["award"]}，{e["conference"]}，{e["year"]}</a></li>)
            })}
            </ul>
        </div>
    );
}

function ResearchAchievements() {
  return (
    <ContentFrame title="Research Achievements" 
    content={getContent()}/>
  );
}

export default ResearchAchievements;