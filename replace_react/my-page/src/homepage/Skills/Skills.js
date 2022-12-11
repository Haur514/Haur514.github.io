import SkillComponent from "../../component/SkillComponent.js";
import "./Skills.css";
import javaLogo from "./../../images/javalogo.png"
import cLogo from "./../../images/clogo.png"

function Skills() {
  return (
    <div className="Skills">
      <SkillComponent name="Java" img={javaLogo}/>
      <SkillComponent name="C" img={cLogo}/>
    </div>
  );
}

export default Skills;
