import WorkComponent from "../../component/WorkComponent.js";
import "./Works.css";
import RatioTimerLogo from "./../../images/RatioTimer.png"
import JuiceAppLogo from "./../../images/JuiceApp.png"

function Works() {
  return (
    <>
      <div className="WorksTitle">
        制作物
      </div>
    <div className="Works">
      <WorkComponent name="RatioTimer" description="時間が測れる．すごい．" imgSrc={RatioTimerLogo} tags={["JavaScript","完成済","SaaS"]}/>
      <WorkComponent name="JuiceApp" description="ジュース販売管理できる．すごい．" imgSrc={JuiceAppLogo} tags={["TypeScript","React","Java Spring Boot","PostgreSQL","In Progress"]}/>
    </div>
    </>
  );
}

export default Works;
