import { useEffect, useState } from "react";
import { Back } from "../../../util/Back";
import ContentFrame from "../../component/ContentFrame";
import AwardAchievementCard from "./AwardAchievementCard";
import ConferenceAchievementCard from "./ConferenceAchievementCard";
function GetContent(){
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
        <div className="p-3">
            <div className="font-bold text-xl">Domestic Conference</div>
            <ul>
            {domesticConf.map((e) => {
                return (<ConferenceAchievementCard key={e} title={e["title"]} author={e["author"]} conference={e["conference"]} year={e["year"]} link={e["link"]}/>);
            })}
            </ul>
            <br/>
            <div className="font-bold text-xl">International Conference</div>
            <ul>
            {internationalConf.map((e) => {
                return (<ConferenceAchievementCard key={e} title={e["title"]} author={e["author"]} conference={e["conference"]} year={e["year"]} link={e["link"]}/>);
            })}
            </ul>
            <br/>
            <div className="font-bold text-xl">Award</div>
            <ul>
            {award.map((e) => {
                return (<AwardAchievementCard key={e} award={e["award"]} conference={e["conference"]} year={e["year"]}/>)
            })}
            </ul>
        </div>
    );
}

function ResearchAchievements() {
  return (
    <ContentFrame title="Research Achievements" 
    content={GetContent()}/>
  );
}

export default ResearchAchievements;