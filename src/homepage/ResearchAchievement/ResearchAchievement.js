import React, { useEffect, useState } from "react";
import ContentFrame from "../../component/ContentFrame";
import { Back } from "../../util/Back";
import "./ResearchAchievement.css";

function getContent(){
    const [achievements,setAchievements] = useState([]);
    const [domesticConf,setDomesticConf] = useState([]);
    const [internationalConf,setInternationalConf] = useState([]);
    const [award,setAward] = useState([]);

    useEffect(() => {
        (async () => {
            setAchievements(await Back.fetch_yaml("./content/achievement.yaml"));
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