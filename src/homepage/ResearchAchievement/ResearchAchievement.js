import ContentFrame from "../../component/ContentFrame";
import "./ResearchAchievement.css"

function getContent(){
    const domesticConference = [
        
        {
            author: "吉岡遼，肥後芳樹，楠本真二",
            title: "実行経路の近似度を用いたテストケースの重みづけによるSBFLの精度向上",
            conference: "電子情報通信学会技術研究報告",
            year: 2022
        },
        {
            author: "吉岡遼，肥後芳樹，柗本真佑，楠本真二，伊藤 信治，Phan Thi Thanh Huyen",
            title: "例外処理を検査するテストが実行経路に基づく欠陥限局手法に与える影響の調査",
            conference: "ソフトウェアエンジニアリングシンポジウム",
            year: 2023
        },
    ]

    const internationalConference = [
        {
            author: "Haruka Yoshioka, Higo Yoshiki, and Shinji Kusumoto.",
            title: "Improving Weighted-SBFL by Blocking Spectrum",
            conference: "IEEE International Working Conference on Source Code Analysis and Manipuration",
            year: 2022
        }
    ]

    const award = [
        {
            award: "IEEE Computer Society Japan Chapter SES Young Researcher Award",
            conference: "Software Engineering Symposium",
            year: 2023
        }
    ]

    return(
        <div>
            <div className="conferenceCategory">Domestic Conference</div>
            <ul>
            {domesticConference.map((e) => {
                return (<li><a>{e["author"]}, {e["title"]}, {e["conference"]}, {e["year"]}<br/></a></li>);
            })}
            </ul>
            <br/>
            <div className="conferenceCategory">International Conference</div>
            <ul>
            {internationalConference.map((e) => {
                return (<li><a>{e["author"]}, {e["title"]}, {e["conference"]}, {e["year"]}<br/></a></li>);
            })}
            </ul>
            <br/>
            <div className="conferenceCategory">Award</div>
            <ul>
            {award.map((e) => {
                return (<li><a>{e["award"]}，{e["conference"]}，{e["year"]}</a></li>)
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