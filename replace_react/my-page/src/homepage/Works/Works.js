import WorkComponent from "../../component/WorkComponent.js";
import "./Works.css";
import javaLogo from "./../../images/javalogo.png"
import cLogo from "./../../images/clogo.png"
import javascriptLogo from "./../../images/javascriptlogo.png"
import htmlLogo from "./../../images/HTMLlogo.png"
import cssLogo from "./../../images/CSSlogo.png"
import pythonLogo from "./../../images/pythonlogo.png"

function Works() {
  return (
    <>
      <div className="WorksTitle">
        制作物
      </div>
    <div className="Works">
      <WorkComponent name="RatioTimer" description="時間が測れる．すごい．"/>
      <WorkComponent name="JuiceApp" description="ジュースの売買を管理できる．すごい．"/>
    </div>
    </>
  );
}

export default Works;
