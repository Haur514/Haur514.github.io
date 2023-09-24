import React from "react";
import "./SkillComponent.css";

function SkillComponent(props) {
  return (
    <div className="SkillComponent">
      <span class="gradient"></span>
      <span className="txt">
        {props.name}
      </span>
      <img src={props.img}></img>
    </div>
  );
}

export default SkillComponent;