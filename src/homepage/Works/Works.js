import WorkComponent from "../../component/WorkComponent.js";
import "./Works.css";
import RatioTimerLogo from "./../../images/RatioTimer.png"
import JuiceAppLogo from "./../../images/JuiceApp.png"

function Works() {
  return (
    <>
      <div className="WorksTitle">
        Works
      </div>
    <div className="Works">
      <WorkComponent name="RatioTimer" description="時間が測れる．すごい．" imgSrc={RatioTimerLogo} tags={["JavaScript","SaaS","FP"]} urls={["https://github.com/Haur514/RatioTimer"]}/>
      <WorkComponent name="JuiceApp" description="ジュース販売管理できる．すごい．" imgSrc={JuiceAppLogo} tags={["TypeScript","React","Java Spring Boot","PostgreSQL","In Progress"]} urls={["https://github.com/Haur514/juiceapp_frontend"]}/>
    </div>
    </>
  );
}

export default Works;
