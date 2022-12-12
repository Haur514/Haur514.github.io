import SkillComponent from "../../component/SkillComponent.js";
import "./Skills.css";
import javaLogo from "./../../images/javalogo.png"
import cLogo from "./../../images/clogo.png"
import javascriptLogo from "./../../images/javascriptlogo.png"
import htmlLogo from "./../../images/HTMLlogo.png"
import cssLogo from "./../../images/CSSlogo.png"
import pythonLogo from "./../../images/pythonlogo.png"

function Skills() {
  return (
    <>
      <div className="SkillsTitle">
        My Proficient Skills
      </div>
    <div className="Skills">
      <SkillComponent name="Java" img={javaLogo}/>
      <SkillComponent name="C" img={cLogo}/>
      <SkillComponent name="JavaScript" img={javascriptLogo}/>
      <SkillComponent name="HTML" img={htmlLogo}/>
      <SkillComponent name="CSS" img={cssLogo}/>
      <SkillComponent name="Python" img={pythonLogo}/>
    </div>
    </>
  );
}

export default Skills;
