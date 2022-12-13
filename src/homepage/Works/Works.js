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
      <WorkComponent name="RatioTimer" description="This App must free you from the burden of calcurate Time." imgSrc={RatioTimerLogo} tags={["JavaScript","SaaS","FP"]} urls={["https://github.com/Haur514/RatioTimer"]}/>
      <WorkComponent name="JuiceApp" description="Im sure you'll be appreciated with JuiceApp when buying it." imgSrc={JuiceAppLogo} tags={["TypeScript","React","Java Spring Boot","PostgreSQL","In Progress"]} urls={["https://github.com/Haur514/juiceapp_frontend"]}/>
    </div>
    </>
  );
}

export default Works;
