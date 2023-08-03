import "./WorkComponent.css";
import React from "react";


function WorkComponent(props) {
  return (
    <div className="WorkComponent">
      <div className="WorkTitle">{props.name}</div>
      <img src={props.imgSrc} />
      <div className="WorkDescription">{props.description}</div>
      <div>
        {props.tags.map((tag) => 
          <span className="tags">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
}

export default WorkComponent;
